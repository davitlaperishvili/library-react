import { BOOKS_LIST } from "./types";

export function changeBooksList() {
    const widgetObjects = localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
    return {
        type: BOOKS_LIST,
        payload: widgetObjects,
    };
}
