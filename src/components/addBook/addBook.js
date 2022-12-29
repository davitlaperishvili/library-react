import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addBook.scss";

export default function AddBook(props) {
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({
        bookName: "",
        bookAuthor: "",
        read: false,
        defaultRadioChecked: true,
    });
    const [formError, setFormError] = useState("");
    const placeholder = formError ? "Please enter correct city name" : "Please enter city name";
    const isFormValueEmpty = (obj) => {
        for (const property in obj) {
            if (obj[property] === "") {
                return true;
            }
        }
        return false;
    };
    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            if (!isFormValueEmpty(formValue)) {
                console.log(formValue);

                setFormValue({
                    bookName: "",
                    bookAuthor: "",
                    read: false,
                    defaultRadioChecked: true,
                });
            } else {
                setFormError("error");
            }
        } catch (e) {
            console.log("Error in onFormSubmit function ===>>>", e);
        }
    }
    function setErrorHtml() {
        if (formError) {
            return <div className="Error"> Fill All Fields </div>;
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
            {setErrorHtml()}
            <div className="form_wrap">
                <form action="" onSubmit={onFormSubmit}>
                    <div className="form_items">
                        <div className="form_item">
                            <input type="text" className={formError} name="bookName" value={formValue.bookName} onChange={handleInputChange} placeholder={placeholder} />
                        </div>
                        <div className="form_item">
                            <input type="text" className={formError} name="bookAuthor" value={formValue.bookAuthor} onChange={handleInputChange} placeholder={placeholder} />
                        </div>
                        <div className="form_item">
                            <input type="radio" className={formError} name="read" checked={!formValue.read} value="" onChange={handleRadioChange} placeholder={placeholder} />
                            <input type="radio" className={formError} name="read" checked={formValue.read} value={true} onChange={handleRadioChange} placeholder={placeholder} />
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
