import React from 'react';
import Button from '../../../Components/Button/Button';
import styles from './product.module.scss';

const Product = (props) => {
  return (
    <div className={styles.product}>
      <div>
        <b>Product name:</b>
      </div>
      <div>
        <b>Product price $:</b>
      </div>
      <div>
        <b>In cart</b>
      </div>
      <Button>
        Add to Cart
      </Button>
      <Button>
        Remove from Cart
      </Button>
    </div>
  );
};

export default Product;
