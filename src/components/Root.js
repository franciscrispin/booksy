import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import LibraryPage from "./Pages/LibraryPage";
import BookPage from "./Pages/BookPage";
import ErrorPage from "./Pages/ErrorPage";
import "../styles.css";

const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/search/:search_input?" component={SearchPage} />
            <Redirect exact from="/library" to="/library/all" />
            <Route
              exact
              path="/library/:visibility_filter"
              component={LibraryPage}
            />
            <Route exact path="/book/:book_id" component={BookPage} />
            <Route
              component={ErrorPage}
              render={() => <Redirect to={{ pathname: "/404" }} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Root;
