import { SessionAction, SessionActionTypes } from "../types/AuthTypes"

interface SessionState {
    user: {
        name: string
        username: string,
        bio?: string,
        id: string
    } | null
    loading: boolean
    errors: string[] | null
}

const initialState : SessionState = {
    user: null,
    loading: true,
    errors: null
}

export const sessionReducer = (state = initialState, action : SessionAction) : SessionState => {
    switch (action.type) {
        case SessionActionTypes.SESSION_LOAD:
            return {user: null, loading: true, errors : null}
        case SessionActionTypes.SESSION_LOAD_SUCCESS: 
            return {user: action.user, loading : false, errors : null}
        case SessionActionTypes.SESSION_LOAD_ERROR: 
            return {user: null, loading: false, errors : action.errors}
        default: 
            return state;
    }
}