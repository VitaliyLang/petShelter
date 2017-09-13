import { createStore as createReduxStore } from 'redux';
import makeRootReducer from './reducers/';

const createStore = (initialState = {}) => {
 
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}

export default createStore;
