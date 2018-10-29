import React from 'react';

import Button from '../../../shared/components/button/button-component';

const Product = (props) => {
  const { product, addToCart, removeFromCart } = props;

  return (
    <div
      className={props.className}
      style={{ border: '1px solid black' }}
    >
      <h1>Name: {product.name}</h1>
      <h2>Price: {product.price}</h2>
      <h2>In Cart: {product.inCart}</h2>
      <p>Total price: {product.price * product.inCart}</p>
      <Button onClick={addToCart.bind(null, product.name)}>
        Add to cart
      </Button>
      <Button onClick={removeFromCart.bind(null, product.name)}>
        Remove from cart
      </Button>
    </div>
  );
};

export default Product;
