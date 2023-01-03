import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBooksList } from "../../redux/actions";

export default function ChangeStatus({ bookID }) {
    const dispatch = useDispatch();
    let state = useSelector((state) => {
        return state;
    });
    function handleChangeStatus() {
        const bookIndex = state.books.findIndex((book) => {
            return bookID === book.bookID;
        });
        const newBooks = state.books.filter(function (item, index) {
            return index !== bookIndex;
        });
        localStorage.setItem("books", JSON.stringify(newBooks));
        dispatch(changeBooksList());
    }
    return (
        <div className="theme_button">
            <a href="javascript:void(0)" onClick={handleChangeStatus}>
                Still Reading
            </a>
        </div>
    );
}
