import AddBook from "./components/addBook/addBook";
import BooksList from "./components/books/BooksList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <>
            <ToastContainer autoClose={2000} />
            <div className="App">
                <div className="library_app">
                    <h1 className="app_header">React Library App</h1>
                    <AddBook />
                    <BooksList />
                </div>
            </div>
        </>
    );
}

export default App;
