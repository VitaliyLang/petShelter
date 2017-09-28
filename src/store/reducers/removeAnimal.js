let initialState = {
    isRemoveAnimal: false,
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'ANIMAL_REMOVE_OK':
            return { ...state, isRemoveAnimal:true};
        case 'ANIMAL_REMOVE_FALSE':
            return { ...state, isRemoveAnimal:false, error:action.error };
        default:
          return state;
      }
}