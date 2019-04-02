import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import Spinner from '../spinner/spinner';
import Error from '../error-indicator/error-indicator';

import { connect } from 'react-redux';

import { withBookStoreService } from '../hoc';
import { fetchBooks, booksAdded } from '../../actions/';

import { compose } from '../../utils';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }
  render() {
    const {
      books,
      loading,
      error,
      onAddedToCart
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }
    return (
      <BookList
        books={books}
        onAddedToCart={onAddedToCart}
      />
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
});

const mapDispatchToProps = (
  dispatch,
  { bookStoreService }
) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookStoreService),
    onAddedToCart: id => {
      dispatch(booksAdded(id));
    }
  };
};

export default compose(
  withBookStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookListContainer);
