let initialState = {
    isAdmin: false,
    user: {},
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'isAdmin':
            return { ...state, user:action.user, isAdmin:true, error:{} };
        case 'isNonAdmin':
            return { ...state, user:action.user, isAdmin:false, error:{} };
        case 'SIGNIN_FALSE':
            return { ...state, isAdmin:false, error:action.error, user:{} };
        default:
          return state;
      }
}