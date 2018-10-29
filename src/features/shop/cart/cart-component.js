import React from 'react';

const Cart = (props) => {
  const { products } = props;
  const totalPrice = products.reduce((acc, p) => {
    const price = p.inCart * p.price;
    return acc + price;
  }, 0);

  const productsInCart = products
    .filter(p => p.inCart > 0)
    .map(p => p.name)
    .join();

  return (
    <div>
      <h1>{productsInCart}</h1>
      {
        productsInCart.length
          ? totalPrice
          : 'There are no products in cart'
      }
    </div>
  );
};

export default Cart;
