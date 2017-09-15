import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';

import people from './people';
/*export const makeRootReducer = () => {
  return combineReducers({
    people,
    firebase
  });
}*/

const makeRootReducer = combineReducers({
  people,
  firebase
})

export default makeRootReducer;