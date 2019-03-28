import React from 'react';

import { BookStoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context';

const withBookStoreService = () => Wrapped => {
  return props => {
    return (
      <BookStoreServiceConsumer>
        {bookStoreService => {
          return (
            <Wrapped
              {...props}
              bookStoreService={bookStoreService}
            />
          );
        }}
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookStoreService;
