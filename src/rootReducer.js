import { combineReducers } from 'redux';
import counter from './features/Counter/counterReducer';

export default combineReducers({
  counter,
});
