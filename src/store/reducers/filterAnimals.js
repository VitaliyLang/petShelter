const initialState = {
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'CHANGE_VALUE':
            return Object.assign({}, state, {[action.name]: action.value});
        case 'DELETE_VALUE':
            let newState = Object.assign({}, state);
            delete newState[action.name];
            return newState;
        case 'SET_VALUES':
            return action.payload
        default:
            return state;
        }
    }