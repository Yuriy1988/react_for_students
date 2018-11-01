import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (name) => ({
  type: ADD_TO_CART,
  payload: name,
});

export const removeFromCart = (name) => ({
  type: REMOVE_FROM_CART,
  payload: name,
});
