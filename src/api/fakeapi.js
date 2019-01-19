import { fakeBookData, fakeSearchBookList } from "./fakeData";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const getBookList = async search => {
  await delay(500);

  // if (Math.random() > 0.0) {
  //   throw new Error("Boom Booklist!");
  // }
  const books = fakeSearchBookList;
  return books;
};

export const getBook = async id => {
  await delay(500);

  // if (Math.random() > 0.0) {
  //   throw new Error("Boom Book!");
  // }
  const book = fakeBookData;
  return book;
};
