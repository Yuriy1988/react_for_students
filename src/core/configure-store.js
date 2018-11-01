import { createStore } from 'redux';
import rootReducer from './root-reducer';

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default configureStore;
