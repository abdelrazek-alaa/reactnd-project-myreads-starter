import React from "react";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./components/ListBooks";
import { Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState(() => ({ books })));
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <ListBooks books={this.state.books} />}
        />
        <Route
          path="/search"
          render={() => <SearchBooks books={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
