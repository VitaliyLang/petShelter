import { combineReducers } from 'redux';

import people from './people';

export const makeRootReducer = () => {
  return combineReducers({
    people
  });
}

export default makeRootReducer;