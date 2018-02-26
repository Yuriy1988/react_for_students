import React from 'react';
import CartItem from './CartItem';
import styles from './cart.module.scss';

const Cart = (props) => {
  const products = props.products.filter(product => product.inCart);
  const totalPrice = products.reduce((acc, product) => {
    return product.inCart
      ? acc + product.inCart * product.price
      : acc;
  }, 0);

  const productsInCart = products.reduce((acc, product) => {
    return product.inCart
      ? acc + product.inCart
      : acc;
  }, 0);

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Cart</h2>
      <div>
        Total price: {totalPrice} $
      </div>
      <b>Products in Cart: {productsInCart}</b>
      <div>
        {products.map(product => {
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

export default Cart;
