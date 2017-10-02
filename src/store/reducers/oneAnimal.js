let initialState = {
    animal : {}
};

export default (state = initialState, action) =>{    
  switch (action.type) {
    case 'FIND_ANIMAL':
      return Object.assign({}, state, {animal:action.payload})
    default: 
      return state;
  }     

}
