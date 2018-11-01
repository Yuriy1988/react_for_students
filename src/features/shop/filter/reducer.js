import { SEARCH_BY_NAME, SORT_BY } from './types';

const initialState = {
  filterValue: '',
  sortByPrice: false,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        filterValue: action.payload,
      };

    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
}
