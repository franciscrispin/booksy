import React from "react";
import "./ErrorStyles.css";

export const loadingSpinnerSrc =
  "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={loadingSpinnerSrc} />
    </div>
  );
};

export default LoadingSpinner;
