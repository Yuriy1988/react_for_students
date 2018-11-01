import React from 'react';
import { connect } from 'react-redux';

import ProductList from './produc-list/product-list-component';
import Cart from './cart/cart-component';
import Filter from './filter/filter-component';
import styles from './shop.scss';
import { addToCart } from './actions';
import { getFilteredProducts, getTotalPrice, getProductsInCart } from './selectors';

const Shop = (props) => {
  const { cars, addToCart, totalPrice, productsInCart } = props;

  return (
    <div >
      <Filter />
      <div className={styles.shop}>
        <ProductList
          addToCart={addToCart}
          products={cars}
          removeFromCart={this.removeFromCart}
        />
        <Cart
          productsInCart={productsInCart}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cars: getFilteredProducts(
    state.shop.products,
    state.filter.filterValue,
    state.filter.sortBy
  ),
  totalPrice: getTotalPrice(state.shop.products),
  productsInCart: getProductsInCart(state.shop.products),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (name) => dispatch(addToCart(name)),
  removeFromCart: (name) => dispatch(addToCart(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
