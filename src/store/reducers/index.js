import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';

import people from './people';
import initLogin from './initLogin';
/*export const makeRootReducer = () => {
  return combineReducers({
    people,
    firebase
  });
}*/

const makeRootReducer = combineReducers({
  people,
  initLogin,
  firebase
})

export default makeRootReducer;