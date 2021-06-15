import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
