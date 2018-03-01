import React from 'react';
import { connect } from 'react-redux';
import Product from './Product/Product';
import styles from './productList.module.scss';
import { addToCart, removeFromCart } from './productActions';
import { getFilteredProducts } from './selector';

const mapStateToProps = (state) => ({
  products: getFilteredProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: id => dispatch(addToCart(id)),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

const ProductList = (props) => {
  const { products, addToCart, removeFromCart } = props;

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
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ProductList);
