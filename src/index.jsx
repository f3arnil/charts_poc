/* global document navigator */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Router from '@/routes/Router';
import { DEFAULT_THEME } from '@/constants/theme';
import store from './store';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.bunker};
    margin: 0;
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primary};
    font-style: normal;
    font-size: 14px;
    padding: 18px 34px;
  }

  .react-resizable-handle.react-resizable-handle-se {
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: se-resize;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${props => props.theme.colors.white};
    border-bottom: 2px solid ${props => props.theme.colors.white};
  }
`;

ReactDOM.render(
  (
    <Provider store={store}>
      <ThemeProvider theme={DEFAULT_THEME}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </ThemeProvider>
    </Provider>
  ),
  document.getElementById('root'),
);

const isDevEnvironment = process.env.NODE_ENV === 'development';

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('qtor-service-worker.js')
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
