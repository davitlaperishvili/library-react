import { BOOKS_LIST } from "./types";

export function changeBooksList() {
    const bookObjects = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
    return {
        type: BOOKS_LIST,
        payload: bookObjects,
    };
}
