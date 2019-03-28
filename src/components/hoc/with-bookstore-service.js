import React from 'react';

import { BookServiceConsumer } from '../bookstore-service-context/bookstore-service-context';

const withBookStoreService = () => Wrapped => {
  return props => {
    return (
      <BookServiceConsumer>
        {bookStoreService => {
          return (
            <Wrapped
              {...props}
              bookStoreService={bookStoreService}
            />
          );
        }}
      </BookServiceConsumer>
    );
  };
};

export default withBookStoreService;
