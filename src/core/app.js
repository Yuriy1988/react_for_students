import React from 'react';
import { Provider } from 'react-redux';

import Shop from '../features/shop/shop-component';
import configureStore from './configure-store';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
};

export default App;
