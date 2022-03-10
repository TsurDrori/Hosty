import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import { RootCmp } from './RootCmp';
import { Provider } from 'react-redux';

import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootCmp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
