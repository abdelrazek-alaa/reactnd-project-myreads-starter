import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
  const { title, books, manageBook } = props;

  const bookShelfTitle =
    (title === "read" ? "Read" : false) ||
    (title === "wantToRead" ? "Want To Read" : false) ||
    (title === "currentlyReading" ? "Currently Reading" : false);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {bookShelfTitle ? bookShelfTitle : ""}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((b) => b.shelf === title)
            .map((b) => (
              <Book key={b.id} book={b} manageBook={manageBook} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
