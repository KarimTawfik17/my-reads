import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelfList extends Component {
  render() {
    var { books } = this.props;
    return (
      <div className="list-books-content">
        <div>
          <Shelf
            shelfTitle="Currently Reading"
            books={books.filter((book) => book.shelf === "currentlyReading")}
          />
          <Shelf
            shelfTitle="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <Shelf
            shelfTitle="Already Read"
            books={books.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
    );
  }
}

export default BookShelfList;
