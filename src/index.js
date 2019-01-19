import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faSearch,
  faInfoCircle,
  faWindowClose,
  faCheckCircle,
  faPlusCircle,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import Root from "./components/Root";
import configureStore from "./configureStore";

const store = configureStore();

library.add(
  faBook,
  faSearch,
  faInfoCircle,
  faWindowClose,
  faCheckCircle,
  faPlusCircle,
  faTrash
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root store={store} />, rootElement);
