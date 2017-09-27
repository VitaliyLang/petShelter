const initialState = {
    show: false
}


export default (state = initialState, action)=>{
    switch (action.type) {
        case 'SHOW_MODAL_BOX':
            return {show: action.bool}
        default:
            return state;
        }
    }