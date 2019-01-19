import React from "react";
import { connect } from "react-redux";
import "./BookStyles.css";

let BookSideInfo = ({ searchBook, className }) => {
  if (searchBook) {
    const { publishedDate, pageCount, amount } = searchBook;
    return (
      <div className={`${className}__book-info`}>
        <ul className="book-info-list">
          <li className="book-info-item">
            Published:{" "}
            <span className="book-info-item__data">{publishedDate}</span>
          </li>
          <li className="book-info-item">
            Length: <span className="book-info-item__data">{pageCount}</span>
          </li>
          <li className="book-info-item">
            Price: <span className="book-info-item__data">{amount}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  searchBook: state.searchBook.books
});

BookSideInfo = connect(mapStateToProps)(BookSideInfo);

export default BookSideInfo;
