import { SEARCH_BY_NAME, SORT_BY } from './types';

export const searchByName = (payload) => ({
  type: SEARCH_BY_NAME,
  payload,
});

export const sortBy = (payload) => ({
  type: SORT_BY,
  payload,
});
