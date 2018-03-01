import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import styles from './cart.module.scss';

import { getCartItems, getProductsInCart, getTotalPrice } from './selectors';

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
  totalPrice: getProductsInCart(state),
  productsInCart: getTotalPrice(state),
});

const Cart = (props) => {
  const { cartItems, totalPrice, productsInCart } = props;
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Cart</h2>
      <div>
        Total price: {totalPrice} $
      </div>
      <b>Products in Cart: {productsInCart}</b>
      <div>
        {cartItems.map(product => {
          return (
            <CartItem
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps
)(Cart);
