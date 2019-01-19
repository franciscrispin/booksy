const url = "https://www.googleapis.com/books/v1/volumes";
const apikey = "AIzaSyD38ahdrLnc57t_XTUp0aiYmR9rqwlJqr8";

// Fetch book data
export const getBookList = async search => {
  const urlToFetch = `${url}?q=${search}&printType=books&key=${apikey}`;
  const response = await fetch(urlToFetch);
  const results = await response.json();
  if (results.totalItems > 0) {
    const { items } = results;
    const books = items.map(processBookData);
    return books;
  } else if (results.totalItems === 0) {
    throw new Error("No books found!");
  } else {
    throw new Error(results.error.message);
  }
};

export const getBook = async id => {
  const urlToFetch = `${url}/${id}?key=${apikey}`;
  const response = await fetch(urlToFetch);
  const results = await response.json();
  if (results.error) {
    if (results.error.code === 503) {
      throw new Error("This book does not exist!");
    } else {
      throw new Error(results.error.message);
    }
  } else {
    const book = processExtraBookData(results);
    return book;
  }
};

// Process book data
const processBookData = book => ({
  id: book.id,
  title: book.volumeInfo.title ? book.volumeInfo.title : "Untitled",
  authors: book.volumeInfo.authors
    ? book.volumeInfo.authors.join(", ")
    : "Author not found",
  thumbnail: processThumbnail(book.volumeInfo.imageLinks)
});

const processExtraBookData = book => {
  return {
    ...processBookData(book),
    subtitle: book.volumeInfo.subtitle ? book.volumeInfo.subtitle : null,
    description: book.volumeInfo.description
      ? book.volumeInfo.description
      : "No description available",
    publishedDate: book.volumeInfo.publishedDate
      ? book.volumeInfo.publishedDate
      : "NA",
    pageCount: book.volumeInfo.pageCount ? book.volumeInfo.pageCount : "NA",
    amount: book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : "NA"
  };
};

const defaultImage =
  "https://www.colburnschool.edu/wp-content/uploads/2018/02/pix-vertical-placeholder.jpg";

const processThumbnail = imageLinks => {
  let url;
  if (!imageLinks) {
    return defaultImage;
  } else if (imageLinks.small) {
    url = imageLinks.small;
  } else if (imageLinks.thumbnail) {
    url = imageLinks.thumbnail;
  } else if (imageLinks.smallThumbnail) {
    url = imageLinks.smallThumbnail;
  } else {
    return defaultImage;
  }
  url = "https" + url.slice(4);
  return url;
};
