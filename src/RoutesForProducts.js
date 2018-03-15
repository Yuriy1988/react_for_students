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
          exact
          component={Cart}
          path='/cart'
        />
        <Route
          exact
          component={ProductDetails}
          path='/product/:id'
        />
        <Route
          component={EditProduct}
          path='/edit/:id'
          exact
        />
      </Switch>
    );
  }
}

export default Routes;
