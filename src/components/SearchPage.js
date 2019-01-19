import React from "react";
import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import Panel from "./Panel";
import PageData from "./PageData";
import CardList from "./CardList";
import { fetchBookList, updateSearchInput } from "../actions";

class SearchPage extends React.Component {
  componentDidMount() {
    const searchInput = this.props.match.params.search_input;
    const hasSearchInputChanged = this.props.searchInput !== searchInput;
    if (hasSearchInputChanged && searchInput) {
      this.props.updateSearchInput(searchInput);
      this.props.fetchBookList(searchInput);
    }
  }

  render() {
    return (
      <div>
        <Toolbar />
        <Panel page="search" />
        <PageData children={<CardList />} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.searchBookList.errorMessage,
  isFetching: state.searchBookList.isFetching,
  searchInput: state.searchInput
});

export default connect(
  mapStateToProps,
  { fetchBookList, updateSearchInput }
)(SearchPage);

// <Toolbar searchBar="search" />
