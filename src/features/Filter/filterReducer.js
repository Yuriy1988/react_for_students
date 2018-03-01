import { SEARCH_BY_NAME, SORT_BY_PRICE } from './types';

const initialState = {
  searchQuery: '',
  sortByPrice: false,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case SORT_BY_PRICE:
      return {
        ...state,
        sortByPrice: true,
      };

    default:
      return state;
  }
}
