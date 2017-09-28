let initialState = {
    isLogout: false,
    error: {}
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'LOGOUT_OK':
            return { ...state, isLogout:true };
        case 'LOGOUT_FALSE':
            return { ...state, isLogout:false, error:action.error };
        default:
          return state;
      }
}