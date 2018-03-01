import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const receiveProducts = (payload) => ({
  type: RECEIVE_PRODUCTS,
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