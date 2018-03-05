import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import AppProducts from './AppProducts';
import Routes from './Routes';
import configureStore from './configureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();
const mountApp = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  mountApp
);
