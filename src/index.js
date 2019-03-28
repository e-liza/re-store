import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import BookStoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import store from './store';

const bookStoreService = new BookStoreService();

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServiceProvider value={bookStoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  rootElement
);
