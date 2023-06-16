import { IUser, UserFetchAction, UserFetchActionTypes } from "../types/UserTypes"

interface UserState {
    [username: string] : {
        loading: boolean
        error: null | any
        user?: IUser
    }
}

const initialState : UserState = {
    
}

export const usersReducer = (state = initialState, action : UserFetchAction) : any => {
    switch (action.type) {
        case UserFetchActionTypes.USER_FETCH_LOADING:
            return {...state, [action.username]: {loading: true, error: null}}
        case UserFetchActionTypes.USER_FETCH_SUCCESS:
            return {...state, [action.user.username]: {loading: false, error: null, user: action.user}}
        case UserFetchActionTypes.USER_FETCH_ERROR:
            return {...state, [action.username]: {loading: false, error: action.error}}
        default: 
            return state;
    }
}