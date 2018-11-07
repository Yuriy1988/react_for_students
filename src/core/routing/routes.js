import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from '../../features/shop/shop-component';
import Cart from '../../features/shop/cart/cart-component';
import Product from '../../features/shop/product/product-component';
import PrivateRoute from './private-route';
import Login from '../../features/auth/auth-component';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact
        from='/'
        to='/shop'
      />
      <Route
        component={Login}
        path='/auth'
      />
      <PrivateRoute
        component={Shop}
        exact
        path='/shop'
      />
      <PrivateRoute
        component={Cart}
        exact
        path='/cart'
      />
      <PrivateRoute
        component={Product}
        exact
        path='/products/:name'
      />
    </Switch>
  );
};

export default Routes;
