import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBookList, fetchBook } from "../../actions";
import "./ErrorStyles.css";

const errorSrc =
  "https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055";

const ErrorMessage = props => {
  const {
    fetchBookList,
    fetchBook,
    errorMessageBookList,
    errorMessageBook,
    match
  } = props;

  const page = match.path.slice(1).split("/")[0];
  const params = Object.values(match.params).toString();

  let handleClick;
  let errorMessage;
  if (page === "book") {
    handleClick = () => fetchBook(params);
    errorMessage = errorMessageBook;
  } else {
    handleClick = () => fetchBookList(params);
    errorMessage = errorMessageBookList;
  }

  // do not show retry button if no books found from search
  let showRetryButton;
  if (
    errorMessage !== "No books found!" &&
    errorMessage !== "This book does not exist!"
  ) {
    showRetryButton = (
      <button className="button button--error" onClick={handleClick}>
        Try again
      </button>
    );
  }

  return (
    <div className="error">
      <img className="error__image" src={errorSrc} />
      <h1>{errorMessage}</h1>
      {showRetryButton}
    </div>
  );
};

const mapStateToProps = state => ({
  errorMessageBookList: state.searchBookList.errorMessage,
  errorMessageBook: state.searchBook.errorMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchBookList, fetchBook }
  )(ErrorMessage)
);
