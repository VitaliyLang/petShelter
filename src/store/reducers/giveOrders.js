let initialState = {
  isRemoving: false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_OK':
      return { ...state, isRemoving:true }
    case 'REMOVE_FALSE':
      return { ...state, isRemoving:false, error:action.error }
    default:
      return state
  }
}
