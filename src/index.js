import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Counter from './features/Counter/Counter';
import configureStore from './configureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
const mountApp = document.getElementById('root');

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  mountApp
);
