let initialState = {
  animals: {},
  isLoading: true,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GetAnimalFulfilled':
      return { ...state, animals:action.animals, error:false, isLoading: false, isOffline: false }
    case 'GetAnimalRejected':
      return { ...state, error:true, isLoading: false, isOffline: false }
    case 'GetAnimalRequested':
      return { ...state, isLoading: true, error:false, isOffline: false }
    case 'getFromOffline':
       return { ...state, animals:action.animals, error:false, isLoading: false, isOffline: true }
    default:
      return state
  }
}
