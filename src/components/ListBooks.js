import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import Loading from "./Loading";
class ListBooks extends Component {
  render() {
    const { books, manageBook, isLoading } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              <BookShelf
                title="currentlyReading"
                books={books}
                manageBook={manageBook}
              />
              <BookShelf
                title="wantToRead"
                books={books}
                manageBook={manageBook}
              />
              <BookShelf title="read" books={books} manageBook={manageBook} />
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
