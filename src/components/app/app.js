import React from 'react';
import './app.css';

import withBookStoreService from '../hoc/with-bookstore-service';

const App = ({ bookStoreService }) => {
  return <div>App</div>;
};

export default withBookStoreService()(App);
