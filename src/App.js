import React, { Component } from 'react';
import Filter from './features/Filter/Filter';
import ProductList from './features/ProductList/ProductList';
import Cart from './features/Cart/Cart';

class App extends Component {
  render() {
    return (
      <div>
        <Filter />
        <div className='flex'>
          <ProductList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
