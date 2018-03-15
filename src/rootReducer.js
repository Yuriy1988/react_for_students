import { combineReducers } from 'redux';
import products from './features/ProductList/productsReducer';
import filter from './features/Filter/filterReducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  products,
  filter,
  form,
});
