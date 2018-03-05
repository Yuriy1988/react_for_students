import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import styles from './cart.module.scss';
import { getProductsInCart, getProductsInCartQuantity, getTotalPrice} from './selectors';

const mapStateToProps = (state) => ({
  productsInCart: getProductsInCart(state),
  productsInCartQuantity: getProductsInCartQuantity(state),
  totalPrice: getTotalPrice(state),
});

const Cart = ({ productsInCart, productsInCartQuantity, totalPrice }) => {
  console.log(111, productsInCart)
  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Cart</h2>
      <div>
        Total price: {totalPrice} $
      </div>
      <b>Products in Cart: {productsInCartQuantity}</b>
      <div>
        {productsInCart.map(product => {
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
  mapStateToProps,
)(Cart);
