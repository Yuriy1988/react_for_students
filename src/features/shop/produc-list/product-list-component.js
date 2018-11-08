import React from 'react';
import Product from './product/product-component';
import styles from './product-list.module.scss';

const ProductList = (props) => {
  const { products, addToCart, removeFromCart } = props;

  return (
    <div className={styles.productList}>
      {
        products.map(p => {
          return (
            <Product
              addToCart={addToCart}
              key={p.id}
              product={p}
              removeFromCart={removeFromCart}
            />
          );
        })
      }
    </div>
  );
};

export default ProductList;
