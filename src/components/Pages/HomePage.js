import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CardList from "../Card/CardList";
import { HomeFilter } from "../Filter/Filter";
import "./HomePage.css";

const Homepage = () => (
  <div className="o-layout-homepage">
    <div className="homepage__logo">
      <a href="/search">Booksy</a>
    </div>
    <div className="homepage-inner-wrapper">
      <SearchBar className="homepage__search" searchBar="search" />
      <HomeFilter />
    </div>
    <CardList />
  </div>
);

export default Homepage;
