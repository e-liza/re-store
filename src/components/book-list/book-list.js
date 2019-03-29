import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';

import { connect } from 'react-redux';

import { withBookStoreService } from '../hoc';

class BookList extends Component {
  componentDidMount() {
    const { bookStoreService } = this.props;
    const data = bookStoreService.getBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <ul>
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

const mapStateToProps = ({ books }) => ({
  books
});

export default withBookStoreService()(
  connect(mapStateToProps)(BookList)
);
