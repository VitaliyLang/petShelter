let initialState = {
  login: false,
  user: {},
  role: null,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_OK':
      return { ...state, login:true, user:action.user, role:action.role, error:{} }
    case 'LOGIN_FALSE':
      return { ...state, login:false, error:action.error, user:{}, role:null }
    default:
      return state
  }
}
