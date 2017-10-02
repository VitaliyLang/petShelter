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
import logout from './logout';
import giveOrders from './giveOrders';
import addAnimal from './addAnimal';
import takeAnimal from './takeAnimal';
import uploadPhoto from './uploadPhoto';
import updateAnimal from './updateAnimal';
import removeAnimal from './removeAnimal';
import modalAdopt from './modalAdopt';
import oneAnimal from './oneAnimal';

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
  logout,
  giveOrders,
  addAnimal,
  takeAnimal,
  uploadPhoto,
  updateAnimal,
  removeAnimal,
  modalAdopt,
  oneAnimal,
  
})

export default makeRootReducer;