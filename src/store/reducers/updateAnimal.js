let initialState = {
    isUpdate: false,
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'UPDATE_ANIMAL_OK':
            return {...state, isUpdate:true};
        case 'UPDATE_ANIMAL_FALSE':
            return {...state, isUpdate:false, error:action.error};
        default:
          return state;
      }
}