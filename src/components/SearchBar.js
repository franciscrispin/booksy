import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBookList, updateSearchInput } from "../actions";
import Svg from "./Svg";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { searchInput: "" };

  handleSearch = () => {
    const searchInput = this.state.searchInput;
    this.props.history.push("/search/" + searchInput);
    if (searchInput) {
      this.props.updateSearchInput(searchInput);
      this.props.fetchBookList(this.state.searchInput);
    }
  };

  handleChange = e => {
    const searchInput = e.target.value;
    this.setState({ searchInput });
  };

  handleClick = () => {
    this.handleSearch();
  };

  handleKeyPress = target => {
    if (target.charCode === 13) {
      this.handleSearch();
    }
  };

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <input
          type="text"
          className="searchbar__input"
          placeholder="Search books"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button className="searchbar__button" onClick={this.handleClick}>
          <div className="button__icon--search">
            <Svg />
          </div>
        </button>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchBookList, updateSearchInput }
  )(SearchBar)
);
