import { ADD_TO_CART, REMOVE_FROM_CART, RECEIVE_PRODUCTS } from './types';

export const fetchProducts = () => {
  return (dispatch, state, api) => {
    api('products')
      .then(response => {
        dispatch(receiveProducts(response.data));
      });
  };
};

const receiveProducts = payload => ({
  type: RECEIVE_PRODUCTS,
  payload,
});

export const editProduct = (product) => {
  return (dispatch) => {
    api(`products/${product.id}`, 'patch', product);
    dispatch()
  };
};


export const addToCart = (product) => {
  return (dispatch) => {
    api(`products/${product.id}`, 'patch', { ...product, inCart: product.inCart + 1 })
      .then(response => {
        dispatch(addToCartSuccess(response.data.id));
      });
  };
};

const addToCartSuccess = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
