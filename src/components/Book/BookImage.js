import React from "react";
import ImageLoader from "react-load-image";
import { loadingSpinnerSrc } from "../LoadingSpinner";
import "./BookStyles.css";

const placeholder =
  "https://www.colburnschool.edu/wp-content/uploads/2018/02/pix-vertical-placeholder.jpg";

const Preloader = props => {
  return (
    <div className="image-loader__preloader">
      <img src={loadingSpinnerSrc} />
    </div>
  );
};

const BookImage = ({ thumbnail }) => (
  <ImageLoader src={thumbnail} className="left__book-image">
    <img className="left__book-image" />
    <img src={placeholder} className="left__book-image" />
    <Preloader />
  </ImageLoader>
);

export default BookImage;
