import React from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";
import "./CardStyles.css";

const truncate = text => {
  const maxLen = 40;
  return text.length > maxLen ? text.slice(0, maxLen) + "..." : text;
};

const Card = ({ libraryBookList, page, ...props }) => {
  const book = { ...props };
  const { id, title, authors, thumbnail } = props;
  let className;

  // if page is home or library
  if (page !== "search") {
    const isCompleted = libraryBookList.find(book => book.id === id).completed;
    className = isCompleted ? "completed" : "";
  }

  return (
    <div className={`card ${className}`}>
      <CardModal id={id} page={page} book={book} />
      <div className="card__text">
        <p className="card__text__title">{truncate(title)}</p>
        <p className="card__text__author">{truncate(authors)}</p>
      </div>
      <div className="card__poster">
        <img className="card__poster__img" src={thumbnail} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  libraryBookList: state.libraryBookList
});

export default connect(mapStateToProps)(Card);
