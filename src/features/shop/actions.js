import { ADD_TO_CART, REMOVE_FROM_CART, RECEIVE_PRODUCTS } from './types';
import api from '../../core/utils/call-api';

export const fetchProducts = () => {
  return (dispatch, state) => {
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

export const addToCart = (name) => ({
  type: ADD_TO_CART,
  payload: name,
});

export const removeFromCart = (name) => ({
  type: REMOVE_FROM_CART,
  payload: name,
});
