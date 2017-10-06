let initialState = {
  isAdmin: false,
  user: {anonime:false},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'isAdmin':
      return { ...state, user:action.user, isAdmin:true }
    case 'isNonAdmin':
      return { ...state, user:action.user, isAdmin:false }
    case 'SIGNIN_FALSE':
      return { ...state, isAdmin:false, error:action.error, user:{anonime:true} }
    default:
      return state
  }
}
