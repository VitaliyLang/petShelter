import { combineReducers } from 'redux';
import category from './category';
import filterAnimals from './filterAnimals';
import categories from './categories';
import listAnimals from './listAnimals';
import listAnimalsv from './listAnimalsv';
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
import oneAnimal from './oneAnimal';
import animalDetail from './animalDetail'


const makeRootReducer = combineReducers({
  category,
  filterAnimals,
  categories,
  listAnimals,
  listAnimalsv,
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
  oneAnimal,
  animalDetail
})

export default makeRootReducer
