import React from 'react';
import Product from '../product/product-component';

const ProductList = (props) => {
  const { products, addToCart, removeFromCart } = props;

  return (
    <div className={props.className}>
      {
        products.map(p => {
          return (
            <Product
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              product={p}
              key={p.name}
            />
          );
        })
      }
    </div>
  );
};

export default ProductList;
