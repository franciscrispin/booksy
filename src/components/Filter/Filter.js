import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Filter.css";

let HomeFilter = props => (
  <div className="home-filter">
    <NavLink to="/library/all">Your Library</NavLink>
    <div className="home-filter__spacer" />
    <NavLink to="/library/all">{props.numBooks} books</NavLink>
  </div>
);

const mapHomeFilterStateToProps = state => ({
  numBooks: state.libraryBookList.length
});

HomeFilter = connect(mapHomeFilterStateToProps)(HomeFilter);

let VisibilityFilter = props => (
  <div className="filter">
    <span>
      <p>{props.numBooks} books</p>
    </span>
    <div className="filter__options">
      <ul>
        <li>
          <NavLink to="/library/all">All</NavLink>
        </li>
        {"|"}
        <li>
          <NavLink to="/library/to_read">To read</NavLink>
        </li>
        {"|"}
        <li>
          <NavLink to="/library/completed">Completed</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

const mapVisibilityFilterStateToProps = state => ({
  numBooks: state.libraryBookList.length
});

VisibilityFilter = connect(mapVisibilityFilterStateToProps)(VisibilityFilter);

export { HomeFilter, VisibilityFilter };
