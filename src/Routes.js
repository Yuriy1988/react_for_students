import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppProducts from './AppProducts';
import ProductDetails from './features/ProductList/ProductDetails/ProductDetails';
import EditProductPage from './features/ProductList/EditProductPage/EditProductPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          component={AppProducts}
          exact
          path='/'
        />
        <Route
          component={ProductDetails}
          exact
          path='/products/:id'
        />
        <Route
          component={EditProductPage}
          exact
          path='/edit/:id'
        />
      </Switch>
    );
  }
}

export default Routes;
