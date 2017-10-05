let initialState = {
  isAdding: false,
  animalUid: null,
  category: null,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ANIMAL_OK':
      return { ...state, isAdding:true, animalUid:action.animalUid, category:action.category, error:{} }
    case 'ADD_ANIMAL_FALSE':
      return { ...state, isAdding:false, error:action.error }
    default:
      return state
  }
}
