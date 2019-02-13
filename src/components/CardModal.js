import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addBook, deleteBook, toggleCompleted } from "../actions";
import "./CardStyles.css";

const ModalOption = ({ text, icon, className, onClick, arg }) => {
  const handleClick = () => onClick(arg);
  return (
    <div className={`modal__options-wrapper ${className}`}>
      <button className="modal_options" onClick={handleClick}>
        <p>{text}</p>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

class CardModal extends React.Component {
  handleAddBook = book => {
    const bookInLibrary = this.props.libraryBookList.find(
      b => b.id === book.id
    );
    if (!bookInLibrary) {
      this.props.addBook({ ...book, completed: false });
      this.props.history.push("/library/all");
    } else {
      alert(`${book.title} is already in your library!`);
    }
  };

  handleDelete = id => {
    this.props.deleteBook(id);
    this.props.history.push("/library/all");
  };

  handleComplete = id => {
    this.props.toggleCompleted(id);
  };

  handleViewMore = id => {
    this.props.history.push("/book/" + id);
  };

  render() {
    const { id, page, book, libraryBookList } = this.props;

    if (page === "search") {
      return (
        <div className="card__modal">
          <ModalOption
            text="Add Book"
            icon="plus-circle"
            className="leftmost-option"
            onClick={this.handleAddBook}
            arg={book}
          />
          <ModalOption
            text="View More"
            icon="info-circle"
            onClick={this.handleViewMore}
            arg={id}
          />
        </div>
      );
    } else {
      const isCompleted = libraryBookList.find(book => book.id === id)
        .completed;
      const completedText = isCompleted ? "Mark as Unread" : "Mark as Read";
      const completedIcon = isCompleted ? "window-close" : "check-circle";
      return (
        <div className="card__modal">
          <ModalOption
            text={completedText}
            icon={completedIcon}
            className="leftmost-option"
            onClick={this.handleComplete}
            arg={id}
          />
          <ModalOption
            text="View More"
            icon="info-circle"
            onClick={this.handleViewMore}
            arg={id}
          />
          <ModalOption
            text="Delete"
            icon="trash"
            onClick={this.handleDelete}
            arg={id}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  libraryBookList: state.libraryBookList
});

export default withRouter(
  connect(
    mapStateToProps,
    { addBook, deleteBook, toggleCompleted }
  )(CardModal)
);
