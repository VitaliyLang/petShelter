import {REHYDRATE} from 'redux-persist/constants';

let resObj = {
  animals: {},
  isLoading: true,
  error: false
};
let initialState =JSON.parse(localStorage.getItem('reduxPersist:listAnimals')) || resObj;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GetAnimalFulfilled':
      return { ...state, animals:action.animals, error:false, isLoading: false }
    case 'GetAnimalRejected':
      return { ...state, error:true, isLoading: false }
    case 'GetAnimalRequested':
      return { ...state, isLoading: true, error:false }
    default:
      return state
  }
}
