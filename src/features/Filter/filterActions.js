import { SEARCH_BY_NAME, SORT_BY_PRICE } from './types';

export const searchByName = (payload) => ({
  type: SEARCH_BY_NAME,
  payload,
});

export const sortByPrice = (payload) => ({
  type: SORT_BY_PRICE,
});
