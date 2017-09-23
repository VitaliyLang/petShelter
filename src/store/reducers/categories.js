let initialState = {
    categories: [],
    isLoading: true,
    error: false
};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'GetInviteFulfilled':
            return { ...state, categories:action.categories, error:false, isLoading: false};
        case 'GetInviteRejected':
            return { ...state, error:true, isLoading: false };
        case 'GetInviteRequested':
            return {...state, isLoading: true, error:false};
        default:
          return state;
      }
}