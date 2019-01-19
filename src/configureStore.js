import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createLogger } from "redux-logger";

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  const persistConfig = {
    key: "root",
    storage: storage
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  return createStore(persistedReducer, applyMiddleware(...middlewares));
};

export default configureStore;
