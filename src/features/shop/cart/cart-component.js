import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import styles from './cart.module.scss';
import { getProductsInCart, getTotalPrice } from '../selectors';
import Nav from '../shared/components/nav-component';

const Cart = (props) => {
  const { productsInCart, totalPrice } = props;

  return (
    <Fragment>
      <Nav />
      <div className={styles.cart}>
        <h2>Cart</h2>
        <h1>{productsInCart}</h1>
        {
          totalPrice > 0
            ? `Total price: ${totalPrice}`
            : 'There are no products in cart'
        }
      </div>
    </Fragment>
  );
};


const mapStateToProps = (state) => ({
  totalPrice: getTotalPrice(state.shop.products),
  productsInCart: getProductsInCart(state.shop.products),
});

export default connect(
  mapStateToProps,
)(Cart);
