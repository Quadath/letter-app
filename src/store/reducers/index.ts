import { combineReducers } from '@reduxjs/toolkit'
import { registerReducer } from './registerReducer'
import { loginReducer } from './loginReducer'
import { sessionReducer } from './sessionReducer'
import { usersReducer } from './usersReducer'
import { userSearchReducer } from './userSearchReducer'

export const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    session: sessionReducer,
    users: usersReducer,
    userSearch: userSearchReducer
})