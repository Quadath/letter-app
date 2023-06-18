import { IUser, UserSearchAction, UserSearchActionTypes } from "../types/UserTypes"

interface UsersSearchState {
    query: string,
    loading: boolean,
    users: IUser[] | null,
    error: any
}

const initialState : UsersSearchState = {
    query: '',
    loading: false,
    users: null,
    error: null
}

export const userSearchReducer = (state = initialState, action : UserSearchAction) : UsersSearchState => {
    switch (action.type) {
        case UserSearchActionTypes.USER_SEARCH_LOADING:
            return {query : action.query, loading: true, users: null, error: null}
        case UserSearchActionTypes.USER_SEARCH_SUCCESS: 
            return {...state, loading: false, users: action.users, error: null}
        case UserSearchActionTypes.USER_SEARCH_ERROR: 
            return {...state, loading: false, users: null,  error: action.error}
        default: 
            return state;
    }
}