import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import LibraryPage from "./LibraryPage";
import BookPage from "./BookPage";
import ErrorPage from "./ErrorPage";
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

// import { fakeSearchBookList } from "../api/fakeData";

// const id = "dsz5AwAAQBAJ";

// const updatedBookData = {
//   ...fakeSearchBookList.find(book => book.id === id),
//   ...fakeBookData
// };

// const reducer = (accumulator, currentValue) => ({ ...accumulator, [currentValue.id]: currentValue });

// const books = items.map(processBookData).reduce(reducer, {});
