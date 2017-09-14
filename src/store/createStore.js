import { compose,createStore as createReduxStore, applyMiddleware } from 'redux';
import makeRootReducer from './reducers/';
import { reduxFirebase } from 'react-redux-firebase';
import {firebaseConfig, config} from './firebaseConfig/firebase';

const createStore = (initialState = {}) => { 
	const createStoreWithMiddleware = compose(
		reduxFirebase(firebaseConfig, config),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
    	window.__REDUX_DEVTOOLS_EXTENSION__()
		)(createReduxStore)

  const store = createStoreWithMiddleware(makeRootReducer);    
 
  return store;
}

export default createStore;