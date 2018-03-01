import React, { Component } from 'react';
import { connect } from 'react-redux';
import productsDb from './productsDb';

import Filter from './features/Filter/Filter';
import ProductList from './features/ProductList/ProductList';
import Cart from './features/Cart/Cart';
import { receiveProducts } from './features/ProductList/productActions';

const mapDispatchToPrpops = (dispatch) => ({
  receiveProducts: (products) => dispatch(receiveProducts(products)),
});

class App extends Component {
  componentDidMount() {
    this.props.receiveProducts(productsDb);
  }

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

export default connect(
  null, mapDispatchToPrpops,
)(App);
