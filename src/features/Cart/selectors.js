export const getProductsInCart = (state) => state.products.products.filter(product => product.inCart);
export const getProductsInCartQuantity = (state) => getProductsInCart(state).length;
export const getTotalPrice =(state) => state.products.products.reduce((acc, product) => {
  return product.inCart
    ? acc + product.inCart * product.price
    : acc;
}, 0);
