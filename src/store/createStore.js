import { compose,createStore as createReduxStore, applyMiddleware } from 'redux';
import makeRootReducer from './reducers/';
import { reduxFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import {firebaseConfig, config} from './firebaseConfig/firebase';

const createStore = (initialState = {}) => { 
	const createStoreWithMiddleware = composeWithDevTools(
		reduxFirebase(firebaseConfig, config)
		)(createReduxStore)

  const store = createStoreWithMiddleware(makeRootReducer);    
 
  return store;
}

export default createStore;