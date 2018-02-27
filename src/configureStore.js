import { createStore } from 'redux';
import rootReducer from './rootReducer';

// Redux dev tools
let devTools = f => f;

if (process.browser &&
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    devTools,
  )
);

export default configureStore;
