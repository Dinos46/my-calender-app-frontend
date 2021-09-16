import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
//set redux global store
import { store } from './store/store';
import { Provider } from 'react-redux';
//set global stylesheet
import './assets/styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
