import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';

import people from './people';
import category from './category';
/*export const makeRootReducer = () => {
  return combineReducers({
    people,
    firebase
  });
}*/

const makeRootReducer = combineReducers({
  people,
  category,
  firebase
})

export default makeRootReducer;