import React from "react";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import PageData from "./PageData";
import Book from "./Book";
import { fetchBook } from "../actions";

class BookPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.book_id;
    return this.props.fetchBook(id);
  }

  render() {
    return (
      <div>
        <Toolbar searchBar="search" />
        <PageData children={<Book />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.searchBook.errorMessage,
  isFetching: state.searchBook.isFetching
});

export default connect(
  mapStateToProps,
  { fetchBook }
)(BookPage);
