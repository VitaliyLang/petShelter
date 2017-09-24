import { combineReducers } from 'redux';
import people from './people';
import category from './category';
import filterAnimals from './filterAnimals';
import categories from './categories';
import listAnimals from './listAnimals';
import messages from './messages';
import signup from './signup';
import signin from './signin';
import login from './login';
import giveOrders from './giveOrders';
import addAnimal from './addAnimal';

const makeRootReducer = combineReducers({
  people,
  category,
  filterAnimals,
  categories,
  listAnimals,
  messages,
  signup,
  signin,
  login,
  giveOrders,
  addAnimal
})

export default makeRootReducer;