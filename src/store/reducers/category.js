const initialState = {
  height: window.innerWidth * 0.18
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_HEIGHT':
      return Object.assign({}, state, { height:action.payload })
    case 'MODIFY_LIST':
      return Object.assign({}, state, { listModify : action.payload })
    case 'CHANGE_TOP':
      return Object.assign({}, state, { top : action.payload })
    case 'CHANGE_BOTTOM':
      return Object.assign({}, state, { bottom : action.payload })
    default:
      return state
  }
}
