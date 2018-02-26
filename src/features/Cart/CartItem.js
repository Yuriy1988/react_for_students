import React from 'react';

const CartItem = ({ product }) => {
  return (
    <div className='card'>
      <div> Title: {product.name}</div>
      <div> Price: {product.inCart * product.price}</div>
      <div> In Cart: {product.inCart}</div>
    </div>
  );
};

export default CartItem;
