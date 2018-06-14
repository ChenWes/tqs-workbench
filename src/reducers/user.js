import {
    USER_REGISTER,
    USER_REGISTER_SUCCESSED,
    USER_REGISTER_FAILED,
    USER_LOGIN,
    USER_LOGIN_SUCCESSED,
    USER_LOGIN_FAILED,
    USER_LOGOUT
} from '../actions/actionTypes/user';


let initUser = {
    isAuthenticated: false,
    isLogin: false,
    token: '',
    user: {},

    isRegister: false,

    loginError: {},
    registerError: {}
}

const userReducers = (state = initUser, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                isAuthenticated: false,
                isLogin: true,
                loginError: {}
            });
        case USER_LOGIN_SUCCESSED:
            return Object.assign({}, state, {
                isAuthenticated: true,
                isLogin: false,
                token: action.userEntity.token,
                user: action.userEntity.user,
            });
        case USER_LOGIN_FAILED:
            return Object.assign({}, state, {
                isAuthenticated: false,
                isLogin: false,
                loginError: action.error
            });
        case USER_LOGOUT:
            return initUser;

            
        case USER_REGISTER:
            return Object.assign({}, state, {
                isRegister: true,
                registerError: {}
            });
        case USER_REGISTER_SUCCESSED:
            return Object.assign({}, state, {
                isRegister: false,
            });
        case USER_REGISTER_FAILED:
            return Object.assign({}, state, {
                isRegister: false,
                registerError: action.error
            });
        default:
            return state;
    }
}


export default userReducers;