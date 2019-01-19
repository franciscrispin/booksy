import { getBookList, getBook } from "../api";
// import { getBookList, getBook } from "../api/fakeapi";

// async actions to fetch book data
const fetchData = (params, dataType, getData) => async dispatch => {
  dispatch({ type: `FETCH_${dataType}_REQUEST` });

  try {
    const response = await getData(params);
    dispatch({
      type: `FETCH_${dataType}_SUCCESS`,
      response
    });
  } catch (error) {
    dispatch({
      type: `FETCH_${dataType}_FAILURE`,
      message: error.message || "Something went wrong"
    });
  }
};

export const fetchBookList = search =>
  fetchData(search, "BOOKLIST", getBookList);

export const fetchBook = id => fetchData(id, "BOOK", getBook);

// actions to add/delete/toggle complete books in library
export const addBook = book => ({
  type: "ADD_BOOK",
  book
});

export const deleteBook = id => ({
  type: "DELETE_BOOK",
  id
});

export const toggleCompleted = id => ({
  type: "TOGGLE_COMPLETED",
  id
});

// action to update search input
export const updateSearchInput = search => ({
  type: "UPDATE_SEARCH_INPUT",
  search
});
