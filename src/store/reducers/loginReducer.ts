import { AuthActionTypes, LoginAction } from '../types/AuthTypes'

interface LoginState {
    message: string
    loading: boolean,
    errors: null | any
}

const initialState: LoginState = {
    message: '',
    loading: false,
    errors: null
}

export const loginReducer = (state = initialState, action: LoginAction) : LoginState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_USER:
            return {message : '', loading: true, errors: null}
        case AuthActionTypes.LOGIN_USER_SUCCESS: 
            return {message: 'Successfully logged in', loading: false, errors: null}
        case AuthActionTypes.LOGIN_USER_ERROR: 
            return {message: "Error", loading: false, errors: action.errors}
        default: 
            return state;
    }
}
