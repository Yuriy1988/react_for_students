import { combineReducers } from 'redux';
import shop from '../features/shop/reducer';
import filter from '../features/shop/filter/reducer';
import auth from '../features/auth/reducer';

export default combineReducers({
  shop,
  filter,
  auth,
});
