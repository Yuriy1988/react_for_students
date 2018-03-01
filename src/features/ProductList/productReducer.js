import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from './types';

const initialState = {
  products: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload
          ? { ...product, inCart: product.inCart + 1 }
          : product
        ),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(product => {
          const updatedProduct = product.inCart === 0
            ? product
            : { ...product, inCart: product.inCart - 1 };

          return product.id === action.payload
            ? updatedProduct
            : product;
        }),
      };

    default:
      return state;
  }
}
