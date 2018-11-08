import { ADD_TO_CART, REMOVE_FROM_CART, RECEIVE_PRODUCTS } from './types';

export default function productsReducer(state = { products: [] }, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map(c => {
          return c.id === action.payload
            ? { ...c, inCart: c.inCart + 1 }
            : c;
        }),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(c => {
          if (c.inCart < 1) {
            return c;
          }

          return c.id === action.payload
            ? { ...c, inCart: c.inCart - 1 }
            : c;
        }),
      };

    default:
      return state;
  }
}
