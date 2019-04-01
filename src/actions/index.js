const booksLoaded = newBooks => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const booksRequested = () => {
  return { type: 'BOOKS_REQUESTED' };
};

const booksError = error => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  };
};

const fetchBooks = (dispatch, bookStoreService)=>() => {
  dispatch(booksRequested());
  bookStoreService
    .getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(err => {
      dispatch(booksError(err));
    });
}

export { fetchBooks };
