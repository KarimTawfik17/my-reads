import React, { Component } from "react";
import Shelf from "./Shelf";

class BookShelfList extends Component {
  render() {
    var { books } = this.props;
    return (
      <div className="list-books-content">
        <div>
          <Shelf
            onUpdateBook={this.props.onUpdateBook}
            shelfTitle="Currently Reading"
            books={books.filter((book) => book.shelf === "currentlyReading")}
          />
          <Shelf
            onUpdateBook={this.props.onUpdateBook}
            shelfTitle="Want to Read"
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <Shelf
            onUpdateBook={this.props.onUpdateBook}
            shelfTitle="Already Read"
            books={books.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
    );
  }
}

export default BookShelfList;
