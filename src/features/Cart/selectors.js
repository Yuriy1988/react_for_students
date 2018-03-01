export const getCartItems = (state) => state.products.products.filter(product => product.inCart);

export const getTotalPrice = (state) => {
  state.products.products.reduce((acc, product) => {
    return product.inCart
      ? acc + product.inCart * product.price
      : acc;
  }, 0);
};

export const getProductsInCart = (state) => {
  return state.products.products.reduce((acc, product) => {
    return product.inCart
      ? acc + product.inCart
      : acc;
  }, 0);
};
