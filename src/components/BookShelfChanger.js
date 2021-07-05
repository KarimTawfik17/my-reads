import React, { Component } from "react";

class BookShelfChanger extends Component {
  selectChangeHandler = (e) => {
    this.props.onUpdateBook(this.props.currentBook, e.target.value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.selectChangeHandler}
          defaultValue={this.props.currentBook.shelf || "none"}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
