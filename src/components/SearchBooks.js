import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      if (this.state.query !== "") {
        BooksAPI.search(this.state.query).then((res) => {
          if (Array.isArray(res) === true) {
            const resBooks = res.filter(
              (book) => book.imageLinks && book.title && book.authors
            );
            resBooks.forEach((book) => {
              var indexOfbookIfAvailable = this.props.currentBooks.findIndex(
                (currentBook) => book.id === currentBook.id
              );
              if (indexOfbookIfAvailable !== -1) {
                book.shelf = this.props.currentBooks[
                  indexOfbookIfAvailable
                ].shelf;
              }
            });
            this.setState({
              books: resBooks,
            });
          } else {
            this.setState({ books: [] });
          }
        });
      } else {
        this.setState({ books: [] });
      }
    }
  }
  state = { query: "", books: [] };

  searchBooksHandler = (e) => {
    this.setState({ query: e.target.value.trim().toLowerCase() });
  };
  render() {
    //
    return (
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
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.searchBooksHandler}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => (
              <li key={book.id}>
                <Book onUpdateBook={this.props.onUpdateBook} book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
