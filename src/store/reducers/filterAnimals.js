import * as animals from '../../routes/Category/data.json'
const initialState = {
    filteredList : animals
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'CHANGE_VALUE':
            return Object.assign({}, state, {[action.name]: action.value});
        case 'DELETE_VALUE':
            let newState = Object.assign({}, state);
            delete newState[action.name];
            return newState;
        case 'SET_FILTERED_LIST':
            return Object.assign({}, state, {filteredList : action.payload})
        default:
            return state;
        }
    }