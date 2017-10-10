let initialState = {
    animals: {},
    isLoading: true,
    error: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GetAnimalFulfilledv':
        return { ...state, animals:action.animals, error:false, isLoading: false, isOffline: false }
      case 'GetAnimalRejectedv':
        return { ...state, error:true, isLoading: false, isOffline: false }
      case 'GetAnimalRequestedv':
        return { ...state, isLoading: true, error:false, isOffline: false }
      default:
        return state
    }
  }
  