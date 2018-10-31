import React from 'react';
import styles from './cart.module.scss';

const Cart = (props) => {
  const { productsInCart, totalPrice } = props;

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <h1>{productsInCart}</h1>
      {
        totalPrice > 0
          ? `Total price: ${totalPrice}`
          : 'There are no products in cart'
      }
    </div>
  );
};

export default Cart;
