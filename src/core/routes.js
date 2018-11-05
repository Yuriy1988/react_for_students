import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from '../features/shop/shop-component';
import Cart from '../features/shop/cart/cart-component';
import Product from '../features/shop/product/product-component';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from='/'
        to='/shop'
      />
      <Route
        component={Shop}
        path='/shop'
      />
      <Route
        component={Cart}
        exact
        path='/cart'
      />
      <Route
        component={Product}
        exact
        path='/products/:name'
      />
    </Switch>
  );
};

export default Routes;
