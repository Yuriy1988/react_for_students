import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Filter from './features/Filter/Filter';
import ProductList from './features/ProductList/ProductList';
import Cart from './features/Cart/Cart';
import ProductDetails from './features/ProductList/ProductDetails/ProductDetails';
import EditProduct from './features/ProductList/EditProduct/EditProduct';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <Filter />
              <ProductList />
            </div>
          )}
        />
        <Route
          component={Cart}
          exact
          path='/cart'
        />
        <Route
          component={ProductDetails}
          exact
          path='/product/:id'
        />
        <Route
          component={EditProduct}
          exact
          path='/edit/:id'
        />
      </Switch>
    );
  }
}

export default Routes;
