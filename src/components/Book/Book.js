import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Parser from "html-react-parser";
import BookImage from "./BookImage";
import BookSideInfo from "./BookSideInfo";
import { addBook, deleteBook, fetchBook } from "../../actions";
import "./BookStyles.css";

class Book extends React.Component {
  handleClick = buttonAction => {
    buttonAction();
    this.props.history.push("/library/all");
  };

  render() {
    const { searchBook, libraryBookList, addBook, deleteBook } = this.props;

    if (searchBook) {
      const bookInLibrary = libraryBookList.find(
        book => book.id === searchBook.id
      );
      const {
        id,
        thumbnail,
        title,
        authors,
        subtitle,
        description
      } = searchBook;
      const buttonType = bookInLibrary ? "delete" : "add";
      const buttonAction = bookInLibrary
        ? () => deleteBook(id)
        : () => addBook({ ...searchBook, completed: false });

      return (
        <div className="o-book-container">
          <div className="o-book-container__left">
            <BookImage thumbnail={thumbnail} />
            <BookSideInfo className="left" />
          </div>
          <div className="spacer" />
          <div className="o-book-container__right">
            <h1 className="right__title">{title}</h1>
            <h1 className="right__author">{authors}</h1>
            <button
              className="button button--book"
              onClick={() => this.handleClick(buttonAction)}
            >{`${buttonType} book`}</button>
            <h3 className="right__subtitle">{subtitle}</h3>
            <p className="right__description">{Parser(description)}</p>
            <BookSideInfo className="mobile" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  searchBook: state.searchBook.books,
  libraryBookList: state.libraryBookList
});

export default withRouter(
  connect(
    mapStateToProps,
    { addBook, deleteBook, fetchBook }
  )(Book)
);
