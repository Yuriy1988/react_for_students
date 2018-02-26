import React from 'react';
import Product from './Product/Product';
import styles from './productList.module.scss';

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

export default ProductList;
