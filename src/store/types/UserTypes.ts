
export interface IUser {
    id: string
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

export enum UserFetchActionTypes {
    USER_FETCH_LOADING = "USER_FETCH_LOADING",
    USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS",
    USER_FETCH_ERROR = "USER_FETCH_ERROR"
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


export enum UserSearchActionTypes {
    USER_SEARCH_LOADING = "USER_SEARCH_LOADING",
    USER_SEARCH_SUCCESS = "USER_SEARCH_SUCCESS",
    USER_SEARCH_ERROR = "USER_SEARCH_ERROR"
}

interface UserSearchLoadingAction {
    type: UserSearchActionTypes.USER_SEARCH_LOADING
    query: string
}
interface UserSearchSuccessAction {
    type: UserSearchActionTypes.USER_SEARCH_SUCCESS
    users: IUser[]
}
interface UserSearchErrorAction {
    type: UserSearchActionTypes.USER_SEARCH_ERROR
    error: any
}

export type UserSearchAction = UserSearchLoadingAction | UserSearchSuccessAction | UserSearchErrorAction