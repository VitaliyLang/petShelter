let initialState = {
  signUp: false,
  error: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_FUL':
      return { ...state, signUp:true, error:[] }
    case 'SIGN_UP_ERROR':
      return { ...state, error:action.error, signUp: false }
    default:
      return state
  }
}
