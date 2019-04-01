import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import Spinner from '../spinner/spinner';
import Error from '../error-indicator/error-indicator';

import { connect } from 'react-redux';

import { withBookStoreService } from '../hoc';
import {
  booksLoaded,
  booksRequested,
  booksError
} from '../../actions/';

import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }
  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error />;
    }
    return (
      <ul className="book-list">
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => ({
  books,
  loading,
  error
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookStoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookStoreService
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(err => {
          dispatch(booksError(err));
        });
    }
  };
};

export default compose(
  withBookStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookList);
