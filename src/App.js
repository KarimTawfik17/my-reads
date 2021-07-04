import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelfList from "./components/BookShelfList";
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
    BooksAPI.update(book, shelf).then(() => {
      this.getAllBooks();
    });
  };

  render() {
    // if (this.state.books.length > 0) {
    //   // console.log("before", this.state.books[0], this.state.books[0].shelf);
    //   // this.updateBook(this.state.books[0], "currentlyReading");
    //   this.state.books[0].title = this.state.books[0].title + "kkkwqdkwjk";
    // }
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}

export default BooksApp;
