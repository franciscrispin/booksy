import { combineReducers } from "redux";

const createReducer = TYPE => {
  const initState = TYPE === "BOOKLIST" ? [] : null;

  const books = (state = initState, action) => {
    switch (action.type) {
      case `FETCH_${TYPE}_SUCCESS`:
        return action.response;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case `FETCH_${TYPE}_FAILURE`:
        return action.message;
      case `FETCH_${TYPE}_REQUEST`:
      case `FETCH_${TYPE}_SUCCESS`:
        return null;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case `FETCH_${TYPE}_REQUEST`:
        return true;
      case `FETCH_${TYPE}_SUCCESS`:
      case `FETCH_${TYPE}_FAILURE`:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    books,
    errorMessage,
    isFetching
  });
};

const libraryBookList = (state = [], action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];
    case "DELETE_BOOK":
      return state.filter(book => book.id !== action.id);
    case "TOGGLE_COMPLETED":
      return state.map(book =>
        book.id === action.id ? { ...book, completed: !book.completed } : book
      );
    default:
      return state;
  }
};

const searchInput = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_INPUT":
      return action.search;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchBookList: createReducer("BOOKLIST"),
  searchBook: createReducer("BOOK"),
  libraryBookList,
  searchInput
});

export default rootReducer;
