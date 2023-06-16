export enum UserFetchActionTypes {
    USER_FETCH_LOADING = "USER_FETCH_LOADING",
    USER_FETCH_SUCCESS = "USER_FETCH_SUCESS",
    USER_FETCH_ERROR = "USER_FETCH_ERROR"
}

export interface IUser {
    name: string
    username: string,
    bio?: string
    posts?: [
        {
            text: string,
            time: Date
        }
    ]
}

interface UserFetchLoadingAction {
    type: UserFetchActionTypes.USER_FETCH_LOADING,
    username: string
}
interface UserFetchSuccessAction {
    type: UserFetchActionTypes.USER_FETCH_SUCCESS,
    user : IUser
}
interface UserFetchErrorAction {
    type: UserFetchActionTypes.USER_FETCH_ERROR,
    username: string
    error: any
}

export type UserFetchAction = UserFetchLoadingAction | UserFetchSuccessAction | UserFetchErrorAction