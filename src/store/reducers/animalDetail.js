const initialState = {
  show: false,
  isResizing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_BOX':
      return Object.assign({}, state, { show: action.bool })
    case 'RESIZING':
      return Object.assign({}, state, { isResizing: action.bool })
    default:
      return state
  }
}
