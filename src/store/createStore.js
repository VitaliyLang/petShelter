import { compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, storages } from 'redux-persist';

const createStore = (initialState = {}) => {
  const composeEnhancers = composeWithDevTools({})
  const store = createReduxStore(rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )
  persistStore(store, {whitelist: ['listAnimals', 'categories'],storage: storages.localStorage});
  return store;
}
export default createStore
