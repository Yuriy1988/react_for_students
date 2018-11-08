import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import api from './utils/call-api';

// Redux dev tools
let devTools = f => f;

const logger = store => next => action => {
  console.log('dispatching', action)
  next(action);
  console.log('next state', store.getState())
  return result;
}

if (process.browser &&
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk.withExtraArgument(api), logger),
      devTools,
    ),
  )
);

export default configureStore;
