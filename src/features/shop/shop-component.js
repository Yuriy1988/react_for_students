import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { addToCart, removeFromCart, deleteProduct } from './actions';
import {
  getFilteredProducts,
  getTotalPrice,
  getProductsInCart,
} from './selectors';
import Product from "./product/product-component";
import Cart from "./cart/cart-component";

const Feature1 = () => <div>Feature1</div>;
const Feature2 = () => <div>Feature2</div>;

const Shop = (props) => {
   return (
    <div>
      <Link to={`${props.match.path}/test1`}>Feature1</Link>
      <Link to={`${props.match.path}/test2`}>Feature2</Link>
      <Switch>
        <Route
          component={Feature1}
          exact
          path={`${props.match.path}/test1`}
        />
        <Route
          component={Feature2}
          exact
          path={`${props.match.path}/test2`}
        />
      </Switch>
    </div>
 );
}

const mapStateToProps = (state) => ({
  cars: getFilteredProducts(
    state.shop.products,
    state.filter.filterValue,
    state.filter.sortOrder
  ),
  totalPrice: getTotalPrice(state.shop.products),
  productsInCart: getProductsInCart(state.shop.products),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (name) => dispatch(addToCart(name)),
  deleteProduct: (name) => dispatch(deleteProduct(name)),
  removeFromCart: (name) => dispatch(removeFromCart(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
