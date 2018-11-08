import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './shared/components/nav-component';
import ProductList from './produc-list/product-list-component';
import Filter from './filter/filter-component';
import styles from './shop.scss';
import { addToCart, removeFromCart, fetchProducts } from './actions';
import { getFilteredProducts, getTotalPrice, getProductsInCart } from './selectors';

class Shop extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { cars, addToCart, removeFromCart } = this.props;

    return (
      <div>
        <Nav />
        <Filter />
        <div className={styles.shop}>
          <ProductList
            addToCart={addToCart}
            products={cars}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    );
  }
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
  addToCart: (id) => dispatch(addToCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
