let initialState = {
    isTaking: false,
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'TAKE_ANIMAL_OK':
            return {...state, isTaking:true,  error:{}};
        case 'ADD_ANIMAL_FALSE':
            return {...state, isTaking:false, error:action.error};
        default:
          return state;
      }
}