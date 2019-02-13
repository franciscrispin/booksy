import React from "react";
import { withRouter } from "react-router-dom";
import "../Error/ErrorStyles.css";

const errorPageSrc =
  "https://www.bittbox.com/wp-content/uploads/2008/06/10-37-Intriguing-404-Error-Page-Designs.jpg";

const ErrorPage = props => {
  const handleClick = () => props.history.push("/home");
  return (
    <div className="error-page">
      <img src={errorPageSrc} />
      <button className="button button--home" onClick={handleClick}>
        Come Home
      </button>
    </div>
  );
};

export default withRouter(ErrorPage);
