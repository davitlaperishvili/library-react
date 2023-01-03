import React from "react";
import { useSelector } from "react-redux";
import NoBooks from "../NoBooks/NoBooks";
import BookItem from "./BookItem";
import "./books.scss";

export default function BooksList() {
    let state = useSelector((state) => {
        return state;
    });
    const renderBooks = (books) => {
        console.log(books);
        if (books.length > 0) {
            return books.map((book, index) => {
                return <BookItem key={book.bookName + book.bookAuthor + index} book={book} />;
            });
        } else {
            return <NoBooks />;
        }
    };

    return (
        <div className="books_list">
            <div className="list_header">
                <div className="list_item">Book Name</div>
                <div className="list_item">Book Author</div>
                <div className="list_item">Finished (Yes/No)</div>
                <div className="list_item">Settings</div>
            </div>
            <div className="list_items">{renderBooks(state.books)}</div>
        </div>
    );
}
