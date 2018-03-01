import { combineReducers } from 'redux';
import products from './features/ProductList/productsReducer';
import filter from './features/Filter/filterReducer';

export default combineReducers({
  products,
  filter,
});
