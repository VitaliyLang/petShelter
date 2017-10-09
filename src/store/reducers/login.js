let initialState = {
  login: false,
  inProgress: false,
  user: {},
  role: null,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_IN_PROGRESS':
      return { ...state, inProgress: true }
    case 'LOGIN_OK':
      return { ...state, inProgress: false, login:true, user:action.user, role:action.role, error:{} }
    case 'LOGIN_FALSE':
      return { ...state, inProgress: false, login:false, error:action.error, user:{}, role:null }
    default:
      return state
  }
}
