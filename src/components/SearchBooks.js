import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import debounce from "lodash.debounce";
import Loading from "./Loading";
class SearchBooks extends Component {
  state = {
    query: "",
    books: [],
    isLoading: false,
  };
  searchItem = (e) => {
    e.persist();
    this.setState(
      () => ({ query: e.target.value, isLoading: true }),
      () => {
        this.debounceReady();
      }
    );
  };
  componentDidMount() {
    this.debounceReady = debounce(() => {
      const query = this.state.query;
      const val = query.length > 0 ? query : "empty";
      BooksAPI.search(val).then((books) => {
        this.setState(() => ({
          books,
          isLoading: false,
        }));
      });
    }, 1000);
  }
  render() {
    const { books, query, isLoading } = this.state;
    const { manageBook, savedBooks } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
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
              value={query}
              onChange={this.searchItem}
            />
          </div>
        </div>
        <div className="search-books-results">
          {isLoading ? (
            <Loading />
          ) : (
            <ol className="books-grid">
              {books.length ? (
                books.map((b) => (
                  <Book
                    key={b.id}
                    book={b}
                    manageBook={manageBook}
                    savedBook={savedBooks}
                  />
                ))
              ) : (
                <h3>There are no books</h3>
              )}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
