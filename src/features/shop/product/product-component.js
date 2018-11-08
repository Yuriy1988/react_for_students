import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProductById } from '../selectors';
import styles from './product.module.scss';

const Product = (props) => {
  const { product } = props;

  return (
    <Fragment>
      <Link to='/'>Go to product list</Link>
      <div
        className={styles.product}
        style={{ border: '1px solid black' }}
      >
        <h2>Name: {product.name}</h2>
        <p>Price: {product.price}</p>
        <p>In Cart: {product.inCart}</p>
        <p>Total price: {product.price * product.inCart}</p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state, props) => ({
  product: getProductById(state.shop.products, props.match.params.id),
});

export default connect(
  mapStateToProps,
)(Product);
