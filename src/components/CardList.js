import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import "./CardStyles.css";

const CardList = ({
  searchBookList,
  allLibraryBooks,
  toReadBooks,
  completedBooks,
  match
}) => {
  const page = match.path.slice(1).split("/")[0];
  const pathIsSearch = match.path.includes("/search");
  const filter = match.params.visibility_filter;
  let bookList;

  if (pathIsSearch) {
    bookList = searchBookList;
  } else if (filter === "all") {
    bookList = allLibraryBooks;
  } else if (filter === "to_read") {
    bookList = toReadBooks;
  } else if (filter === "completed") {
    bookList = completedBooks;
  } else {
    bookList = allLibraryBooks;
  }

  const displayBooks = bookList.length
    ? bookList.map(book => {
        return (
          <Card
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            thumbnail={book.thumbnail}
            page={page}
          />
        );
      })
    : null;

  return (
    <div className={`o-card-container--${page}`}>
      <div className="card-wrapper">{displayBooks}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  searchBookList: state.searchBookList.books,
  allLibraryBooks: state.libraryBookList,
  toReadBooks: state.libraryBookList.filter(book => !book.completed),
  completedBooks: state.libraryBookList.filter(book => book.completed)
});

export default withRouter(connect(mapStateToProps)(CardList));
