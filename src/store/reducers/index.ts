import { combineReducers } from '@reduxjs/toolkit'
import { registerReducer } from './registerReducer'
import { loginReducer } from './loginReducer'

export const rootReducer = combineReducers({
    register: registerReducer,
    login: loginReducer
})