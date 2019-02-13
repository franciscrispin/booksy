import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./Error/ErrorMessage";

let PageData = ({ children, ...props }) => {
  const { errorMessage, isFetching } = props;
  const showLoading = isFetching ? <LoadingSpinner /> : children;
  const showError = errorMessage ? <ErrorMessage /> : null;
  return (
    <div>
      {showLoading}
      {showError}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.match.path.slice(1).split("/")[0];
  if (path === "book") {
    return {
      errorMessage: state.searchBook.errorMessage,
      isFetching: state.searchBook.isFetching
    };
  } else {
    return {
      errorMessage: state.searchBookList.errorMessage,
      isFetching: state.searchBookList.isFetching
    };
  }
};

PageData = withRouter(connect(mapStateToProps)(PageData));

export default PageData;
