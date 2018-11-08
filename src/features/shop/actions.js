import { ADD_TO_CART, REMOVE_FROM_CART, RECEIVE_PRODUCTS } from './types';
import api from '../../core/utils/call-api';

export const fetchProducts = () => {
  return (dispatch) => {
    api('products')
      .then(response => {
        dispatch(receiveProducts(response.data));
      });
  };
};

export const editProduct = (product) => {
  return () => {
    api(`products/${product.id}`, 'patch', product);
    return Promise.resolve();
  };
}


export const addToCart = (product) => {
  return (dispatch) => {
    api(`products/${product.id}`, 'patch', { ...product, inCart: product.inCart + 1 })
      .then(response => {
        dispatch(addToCartSuccess(response.data.id));
      });
  };
};

const receiveProducts = payload => ({
  type: RECEIVE_PRODUCTS,
  payload,
});

const addToCartSuccess = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
