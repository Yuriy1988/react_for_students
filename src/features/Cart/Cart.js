import React from 'react';
import styles from './cart.module.scss';

const Cart = (props) => {
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Cart</h2>
      <div>
        Total price:
      </div>
      <b>Products in Cart: </b>
    </div>
  );
};

export default Cart;
