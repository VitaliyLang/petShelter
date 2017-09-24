let initialState = {
    isAdding: false,
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'ADD_ANIMAL_OK':
            return {...state, isAdding:true,  error:{}};
        case 'ADD_ANIMAL_FALSE':
            return {...state, isAdding:false, error:action.error};
        default:
          return state;
      }
}