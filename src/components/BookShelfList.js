import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class BookShelfList extends Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <Shelf
            onUpdateBook={this.props.onUpdateBook}
            shelfTitle="Currently Reading"
            books={this.props.books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
          />
          <Shelf
            onUpdateBook={this.props.onUpdateBook}
            shelfTitle="Want to Read"
            books={this.props.books.filter(
              (book) => book.shelf === "wantToRead"
            )}
          />
          <Shelf
            onUpdateBook={this.props.onUpdateBook}
            shelfTitle="Already Read"
            books={this.props.books.filter((book) => book.shelf === "read")}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelfList;
