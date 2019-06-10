/* global document navigator */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from '@/routes/Router';
import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <Router />
    </Provider>
  ),
  document.getElementById('root'),
);

const isDevEnvironment = process.env.NODE_ENV === 'development';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('medlab-service-worker.js')
      .then(() => ({}))
      .catch((error) => {
        // eslint-disable-next-line
        console.error('Whoops. Service worker registration failed, error:', error);
      });
  }
};

if (!isDevEnvironment) {
  registerServiceWorker();
}
