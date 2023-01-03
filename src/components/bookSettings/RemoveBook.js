import React from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../helpers/Notify";
import { changeBooksList } from "../../redux/actions";

export default function RemoveBook({ bookID }) {
    const dispatch = useDispatch();
    let state = useSelector((state) => {
        return state;
    });
    function handleRemoveBook() {
        const bookIndex = state.books.findIndex((book) => {
            return bookID === book.bookID;
        });
        const newBooks = state.books.filter(function (item, index) {
            return index !== bookIndex;
        });
        localStorage.setItem("books", JSON.stringify(newBooks));
        dispatch(changeBooksList());
        notify("success", "Book is removed");
    }
    return (
        <div className="theme_button">
            <a href="javascript:void(0)" onClick={handleRemoveBook}>
                Remove
            </a>
        </div>
    );
}
