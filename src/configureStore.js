import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;
