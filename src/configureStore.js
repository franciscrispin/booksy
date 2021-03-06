import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";

const configureStore = () => {
  const middlewares = [thunk];

  // show redux logger when in development only
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  // save the state of the users' reading list in the store
  const persistConfig = {
    key: "root",
    storage: storage
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return createStore(persistedReducer, applyMiddleware(...middlewares));
};

export default configureStore;
