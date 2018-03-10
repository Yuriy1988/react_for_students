import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import callApi from './utils/callApi';
import rootReducer from './rootReducer';

// Redux dev tools
let devTools = f => f;

if (process.browser &&
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action);
  console.log('next state', store.getState())
  return result;
};

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk.withExtraArgument(callApi)),
      devTools,
    ),
  )
)
export default configureStore;
