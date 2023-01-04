import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBooksList } from "../../redux/actions";

export default function ChangeStatus({ bookID, read }) {
    const dispatch = useDispatch();
    let state = useSelector((state) => {
        return state;
    });
    function handleChangeStatus() {
        const bookIndex = state.books.findIndex((book) => {
            return bookID === book.bookID;
        });
        const newBooks = [...state.books];
        newBooks[bookIndex].read = !newBooks[bookIndex].read;
        localStorage.setItem("books", JSON.stringify(newBooks));
        dispatch(changeBooksList());
    }
    return (
        <div className="theme_button">
            <button onClick={handleChangeStatus}>{read ? "Still Reading" : "Finished"}</button>
        </div>
    );
}
