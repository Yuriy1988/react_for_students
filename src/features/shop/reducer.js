import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

const products = [
  {
    name: 'BMW',
    price: 50000,
    inCart: 0,
  }, {
    name: 'Audi',
    price: 40000,
    inCart: 0,
  }, {
    name: 'Lada',
    price: 500,
    inCart: 0,
  }, {
    name: 'Fiat',
    price: 12000,
    inCart: 0,
  }, {
    name: 'Renault',
    price: 14000,
    inCart: 0,
  },
];

export default function productsReducer(state = { products }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map(c => {
          return c.name === action.payload
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

          return c.name === action.payload
            ? { ...c, inCart: c.inCart - 1 }
            : c;
        }),
      };

    default:
      return state;
  }
}
