import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './core/App';

const mountApp = document.getElementById('root');
render(
  <App />,
  mountApp
);
