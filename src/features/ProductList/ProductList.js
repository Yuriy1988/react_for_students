import React from 'react';
// import Product from './Product/Product';
import styles from './productList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.productList}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.list} />
    </div>
  );
};

export default ProductList;
