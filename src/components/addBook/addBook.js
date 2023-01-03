import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../helpers/Notify";
import { changeBooksList } from "../../redux/actions";
import "./addBook.scss";

export default function AddBook(props) {
    const dispatch = useDispatch();
    let state = useSelector((state) => {
        return state;
    });
    const [formValue, setFormValue] = useState({
        bookID: null,
        bookName: "",
        bookAuthor: "",
        read: false,
        defaultRadioChecked: true,
    });
    const [formError, setFormError] = useState("");
    const isFormValueEmpty = (obj) => {
        for (const property in obj) {
            if (obj[property] === "") {
                return true;
            }
        }
        return false;
    };
    function bookIsAlreadyInList(bookID) {
        return state.books.findIndex((book) => {
            return bookID === book.bookID;
        });
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            if (!isFormValueEmpty(formValue)) {
                const bookID = formValue.bookAuthor + formValue.bookName + formValue.read;
                if (bookIsAlreadyInList(bookID) < 0) {
                    let existingBooks = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
                    const book = { ...formValue, bookID };
                    localStorage.setItem("books", JSON.stringify([...existingBooks, book]));
                    dispatch(changeBooksList());
                    setFormValue({
                        bookName: "",
                        bookAuthor: "",
                        read: false,
                        defaultRadioChecked: true,
                    });
                    notify("success", "Book is added");
                } else {
                    notify("danger", "Book is already in the list");
                }
            } else {
                notify("danger", "Fill all fields, please");
            }
        } catch (e) {
            console.log("Error in onFormSubmit function ===>>>", e);
        }
    }
    function handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const inputItem = { ...formValue, [name]: value };
        setFormValue(inputItem);
    }

    function handleRadioChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const inputItem = { ...formValue, [name]: Boolean(value) };
        setFormValue(inputItem);
    }

    return (
        <div className="add_book">
            <div className="form_wrap">
                <form action="" onSubmit={onFormSubmit}>
                    <div className="form_items">
                        <div className="form_item">
                            <input type="text" className={formError} name="bookName" value={formValue.bookName} onChange={handleInputChange} placeholder="Book Name" />
                        </div>
                        <div className="form_item">
                            <input type="text" className={formError} name="bookAuthor" value={formValue.bookAuthor} onChange={handleInputChange} placeholder="Book Author" />
                        </div>
                        <div className="form_item">
                            <div className="checkbox_group">
                                <label htmlFor="read">Read</label>
                                <input type="radio" id="read" className={formError} name="read" checked={!formValue.read} value="" onChange={handleRadioChange} />
                            </div>
                            <div className="checkbox_group">
                                <label htmlFor="still">Still Reading</label>
                                <input type="radio" id="still" className={formError} name="read" checked={formValue.read} value={true} onChange={handleRadioChange} />
                            </div>
                        </div>
                        <div className="form_item form_submit">
                            <button className="gilaki" type="submit">
                                Add Book
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
