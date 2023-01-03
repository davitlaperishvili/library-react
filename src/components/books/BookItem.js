import React from "react";
import ChangeStatus from "../bookSettings/ChangeStatus";
import RemoveBook from "../bookSettings/RemoveBook";

export default function BookItem({ book }) {
    const { bookAuthor, bookName, read, bookID } = book;
    return (
        <div className="book_item">
            <div className="list_item">{bookAuthor}</div>
            <div className="list_item">{bookName}</div>
            <div className="list_item">{read ? "Yes" : "No"}</div>
            <div className="list_item">
                <div className="item_buttons">
                    <RemoveBook bookID={bookID} />
                    <ChangeStatus bookID={bookID} read={read} />
                </div>
            </div>
        </div>
    );
}
