import { BOOKS_LIST } from "./types";

const initialBooks = localStorage.getItem("books");
let initialState = initialBooks ? [...JSON.parse(initialBooks)] : [];
export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LIST:
            return [...action.payload];
        default:
            return state;
    }
};
