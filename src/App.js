import React from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoading: true,
  };
  manageBook = (bookId, shelf) => {
    BooksAPI.update({ id: bookId }, shelf).then((d) =>
      BooksAPI.getAll().then((books) => this.setState(() => ({ books })))
    );
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState(() => ({ books, isLoading: false }))
    );
  }

  render() {
    const { books, isLoading } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={books}
              isLoading={isLoading}
              manageBook={this.manageBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks savedBooks={books} manageBook={this.manageBook} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
