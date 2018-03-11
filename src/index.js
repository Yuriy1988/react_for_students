import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppProducts from './AppProducts';
import configureStore from './configureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import Example from './features/HOC example/Example';


const store = configureStore();
const mountApp = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <Example />
    </BrowserRouter>
  </Provider>,
  mountApp
);
