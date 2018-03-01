import {
  SEARCH_BY_NAME,
  SORT_BY_PRICE,
} from './types';

export const searchByName = (name) => ({
  type: SEARCH_BY_NAME,
  payload: name,
});

export const sortByPrice = () => ({
  type: SORT_BY_PRICE,
});
