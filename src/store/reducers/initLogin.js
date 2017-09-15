const initialState = {isLogin: false};

export default function petLogin(state = initialState, action) {
    if(action.type == 'IS_LOGIN'){
        return {isLogin: action.isLogin}
    }
    return state    
}
