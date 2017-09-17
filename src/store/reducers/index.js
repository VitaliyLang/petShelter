import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase} from 'react-redux-firebase';

import people from './people';
import category from './category';
import filterAnimals from './filterAnimals'
/*export const makeRootReducer = () => {
  return combineReducers({
    people,
    firebase
  });
}*/

const makeRootReducer = combineReducers({
  people,
  category,
  filterAnimals,
  firebase
})

export default makeRootReducer;