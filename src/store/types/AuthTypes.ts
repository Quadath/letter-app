export enum AuthActionTypes {
    REGISTER_USER = 'REGISTER_USER',
    REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
    REGISTER_USER_ERROR = 'REGISTER_USER_ERROR',
    LOGIN_USER = "LOGIN",
    LOGIN_USER_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_USER_ERROR = 'LOGIN_ERROR'
}

interface RegisterUserAction {
    type: AuthActionTypes.REGISTER_USER
}
interface RegisterUserSuccessAction {
    type: AuthActionTypes.REGISTER_USER_SUCCESS
    message: string
}
interface RegisterUserErrorAction {
    type: AuthActionTypes.REGISTER_USER_ERROR
    errors: any
}

interface LoginUserAction {
    type: AuthActionTypes.LOGIN_USER
}
interface LoginUserSuccessAction {
    type: AuthActionTypes.LOGIN_USER_SUCCESS
    message: string
}
interface LoginUserErrorAction {
    type: AuthActionTypes.LOGIN_USER_ERROR
    errors: any
}

export type RegisterAction = RegisterUserAction | RegisterUserSuccessAction | RegisterUserErrorAction
export type LoginAction = LoginUserAction | LoginUserSuccessAction | LoginUserErrorAction

export enum SessionActionTypes {
    SESSION_LOAD = 'SESSION_LOAD',
    SESSION_LOAD_SUCCESS = 'SESSION_LOAD_SUCCESS',
    SESSION_LOAD_ERROR = 'SESSION_LOAD_ERROR'
}

interface SessionLoadAction {
    type: SessionActionTypes.SESSION_LOAD
}
interface SessionLoadSuccessAction {
    type: SessionActionTypes.SESSION_LOAD_SUCCESS
    user: {
        name: string
        username: string
        bio?: string
        id: string
    }
}
interface SessionLoadErrorAction {
    type: SessionActionTypes.SESSION_LOAD_ERROR
    errors: string[]
}

export type SessionAction = SessionLoadAction | SessionLoadSuccessAction | SessionLoadErrorAction