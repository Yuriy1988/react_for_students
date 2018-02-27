import React from 'react';
import Button from '../../../components/Button/Button';
import styles from './product.module.scss';

const Product = (props) => {
  const { product, addToCart, removeFromCart } = props;

  return (
    <div className={styles.product}>
      <div>
        <b>Product name: {product.name}</b>
      </div>
      <div>
        <b>Product price $: {product.price}</b>
      </div>
      <div>
        <b>In cart {product.inCart}</b>
      </div>
      <Button onClick={addToCart.bind(null, product.id)}>
        Add to Cart
      </Button>
      <Button onClick={removeFromCart.bind(null, product.id)}>
        Remove from Cart
      </Button>
    </div>
  );
};

export default Product;
