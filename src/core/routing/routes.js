import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from '../../features/shop/shop-component';
import Cart from '../../features/shop/cart/cart-component';
import Product from '../../features/shop/product/product-component';
import PrivateRoute from './private-route';
import Auth from '../../features/auth/auth-component';
import CreateProduct from '../../features/shop/create-product/create-product-component';


const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from='/'
        to='/shop'
      />
      <Route
        component={Auth}
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
        path='/products/:id'
      />
      <PrivateRoute
        component={CreateProduct}
        exact
        path='/shop/create'
      />
    </Switch>
  );
};

export default Routes;
