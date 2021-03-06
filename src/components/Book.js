import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";
class Book extends Component {
  render() {
    // //

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
            }}
          />
          <BookShelfChanger
            currentBook={this.props.book}
            onUpdateBook={this.props.onUpdateBook}
          />
        </div>

        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors.join(", ")}</div>
      </div>
    );
  }
}

export default Book;
