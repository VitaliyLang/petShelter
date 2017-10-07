import { compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const createStore = (initialState = {}) => {
  const composeEnhancers = composeWithDevTools({})
  const store = createReduxStore(rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
  return store;
}
export default createStore
