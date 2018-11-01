import { combineReducers } from 'redux';
import shop from '../features/shop/reducer';
import filter from '../features/shop/filter/reducer';

export default combineReducers({
  shop,
  filter,
});
