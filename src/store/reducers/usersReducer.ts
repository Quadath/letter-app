import { UserFetchAction, UserFetchActionTypes } from "../types/UserTypes"

interface UserState {
    users: any
}

const initialState : UserState = {
    users: null
}

export const usersReducer = (state = initialState, action : UserFetchAction) : any => {
    switch (action.type) {
        case UserFetchActionTypes.USER_FETCH_LOADING:
            return {
                ...state, users: {...state.users, ['allo']: {
                    loading: true,
                    error: null
                }}}
        default: 
            return state;
    }
}