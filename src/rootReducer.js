import { combineReducers } from 'redux';
import counter from './features/Counter/counterReducer';
import products from './features/ProductList/productReducer';
import filter from './features/Filter/filterReducer';

export default combineReducers({
  counter,
  products,
  filter,
});
