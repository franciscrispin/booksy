import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { VisibilityFilter } from "../Filter/Filter";
import "./Panel.css";

const Panel = ({ page }) => (
  <div className="o-panel-wrapper">
    <div className="panel">
      <SearchBar className="searchbar--mobile" searchSvg="search" />
      {page === "library" ? <VisibilityFilter /> : null}
    </div>
  </div>
);

export default Panel;
