import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import "./Toolbar.css";

const Toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <NavLink to="/home" className="toolbar__logo">
          Booksy
        </NavLink>
      </div>
      <SearchBar className="searchbar--desktop" />
      <div className="toolbar__navigation--icons">
        <NavLink to="/search">
          <FontAwesomeIcon
            className="toolbar__navigation-search"
            icon="search"
          />
        </NavLink>
        <NavLink to="/library/all">
          <FontAwesomeIcon className="toolbar__navigation-filter" icon="book" />
        </NavLink>
      </div>
      <div className="toolbar__navigation--items">
        <ul>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/library/all">Library</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
