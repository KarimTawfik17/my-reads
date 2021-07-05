import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelfList from "./components/BookShelfList";
import SearchBooks from "./components/SearchBooks";
import { Route } from "react-router-dom";

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
        <Route
          exact
          path="/search"
          render={() => (
            <SearchBooks
              currentBooks={this.state.books}
              onUpdateBook={this.updateBook}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelfList
                books={this.state.books}
                onUpdateBook={this.updateBook}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
