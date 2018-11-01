import { ADD_TO_CART } from './types';

export default function productsReducer(state = { products: [], shops: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}
