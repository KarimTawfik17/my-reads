import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelfList from "./components/BookShelfList";
import SearchBooks from "./components/SearchBooks";
class BooksApp extends React.Component {
  getAllBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  state = {
    books: [],
    showSearchPage: false,
  };

  updateBook = (book, shelf) => {
    book.shelf = shelf;
    this.setState((prevState) => {
      var oldBooks = prevState.books;
      var currentBook = oldBooks.find((el) => el.id === book.id);
      if (currentBook) {
        currentBook.shelf = shelf;
        console.log("book changed");

        return { books: oldBooks };
      }
      console.log("book Added");

      return { books: [...oldBooks, book] };
    });

    BooksAPI.update(book, shelf).then(() => {
      console.log("succeded");
    });
  };

  render() {
    return (
      <div className="app">
        <SearchBooks
          currentBooks={this.state.books}
          onUpdateBook={this.updateBook}
        />
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookShelfList
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
          <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>
              Add a book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
