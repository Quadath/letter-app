import { combineReducers } from '@reduxjs/toolkit'
import { registerReducer } from './authReducer'

export const rootReducer = combineReducers({
    register: registerReducer
})