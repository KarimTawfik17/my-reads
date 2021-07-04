import React, { Component } from "react";
import Book from "./Book";

class Shelf extends Component {
  render() {
    console.log("my books are : ", this.props.books);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
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

export default Shelf;
