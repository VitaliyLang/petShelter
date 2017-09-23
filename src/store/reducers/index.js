import { combineReducers } from 'redux';
import people from './people';
import category from './category';
import filterAnimals from './filterAnimals'
import categories from './categories'
import listAnimals from './listAnimals'
import messages from './messages'

const makeRootReducer = combineReducers({
  people,
  category,
  filterAnimals,
  categories,
  listAnimals,
  messages
})

export default makeRootReducer;