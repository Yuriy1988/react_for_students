import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EDIT_PRODUCT,
} from './types';

export const fetchProducts = () => {
  return (dispatch, state, api) => {
    api('products')
      .then(response => {
        dispatch(receiveProducts(response.data))
      });
  };
};

export const receiveProducts = (payload) => ({
  type: RECEIVE_PRODUCTS,
  payload,
});

export const editProduct = (payload) => ({
  type: EDIT_PRODUCT,
  payload,
});

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const receiveShops = (payload)=> ({
  type: 'RECEIVE_SHOPS',
  payload,
});
