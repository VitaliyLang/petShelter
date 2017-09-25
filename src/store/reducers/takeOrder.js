let initialState = {
    takeOrderOk: false,
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'TAKE_ORDER_OK':
            return {...state, takeOrderOk:true,  error:{}};
        case 'TAKE_ORDER_FALSE':
            return {...state, takeOrderOk:false, error:action.error};
        default:
          return state;
      }
}