import React, { Component } from 'react';
import { connect }from 'react-redux';
import Product from './Product/Product';
import styles from './productList.module.scss';
import {
  receiveProducts,
  addToCart,
  removeFromCart,
  receiveShops,
  fetchProducts,
}from './productsActions';
import { getProducts } from './selector';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  shops: state.products.shops,
});

const mapDispatchToProps = (dispatch) => ({
  receiveProducts: (products) => dispatch(receiveProducts(products)),
  receiveShops: (products) => dispatch(receiveShops(products)),
  addToCart: (id) => dispatch(addToCart(id)),
  fetchProducts: () => dispatch(fetchProducts()),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

class ProductList extends Component {
  componentDidMount() {
    if (!this.props.products.length) {
      this.props.fetchProducts();
    }
    this.props.fetchProducts();
  }

  render() {
    const { products, addToCart, removeFromCart } = this.props;

    return (
      <div className={styles.productList}>
        <h2 className={styles.title}>Products</h2>
        <div className={styles.list} />
        {products.map(product => {
          return (
            <Product
              addToCart={addToCart}
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
