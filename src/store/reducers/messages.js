let initialState = {};

export default (state = initialState, action) =>{    
      switch (action.type) {
        case 'GetMessagesFulfilled':
            return { ...state, messages:action.messages};
        default:
          return state;
      }
}