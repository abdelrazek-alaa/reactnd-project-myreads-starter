import React from "react";

const Book = (props) => {
  const { book, manageBook } = props;

  const handleChange = (e) => {
    const bookId = book.id;
    const selectedShelf = e.target.value;
    if (selectedShelf !== book.shelf) {
      manageBook(bookId, selectedShelf);
    }
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ""
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={handleChange}
              defaultValue={book.shelf ? book.shelf : "none"}
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
        </div>
        <div className="book-title">
          {book.title ? book.title : "No title Available"}
        </div>
        {book.authors ? (
          book.authors.map((a, index) => (
            <div key={index} className="book-authors">
              {a}
            </div>
          ))
        ) : (
          <div className="book-authors">no author available</div>
        )}
      </div>
    </li>
  );
};

export default Book;
