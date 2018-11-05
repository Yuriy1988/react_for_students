import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../../shared/components/button/button-component';
import styles from './product.module.scss';

const Product = (props) => {
  const { product, addToCart, removeFromCart, deleteProduct } = props;

  return (
    <div
      className={styles.product}
      style={{ border: '1px solid black' }}
    >
      <h2>Name:
        <Link to={`products/${product.name}`}>{product.name}</Link>
      </h2>
      <p>Price: {product.price}</p>
      <p>In Cart: {product.inCart}</p>
      <p>Total price: {product.price * product.inCart}</p>
      <Button onClick={addToCart.bind(null, product.name)}>
        Add to cart
      </Button>
      <Button onClick={removeFromCart.bind(null, product.name)}>
       Remove from cart
      </Button>
      <Button onClick={deleteProduct.bind(null, product.name)}>
        Delete product
      </Button>
    </div>
  );
};

export default Product;
