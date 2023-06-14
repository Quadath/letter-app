import axios from 'axios'
import { Dispatch } from "react";
import { RegisterAction, LoginAction, AuthActionTypes } from '../store/types';

export interface RegisterRequestBody {
    name: string,
    username: string,
    password: string,
    repeat: string
}

export interface LoginRequestBody {
    username: string,
    password: string
}

export const registerRequest = (body : RegisterRequestBody) => {
    return async (dispatch : Dispatch<RegisterAction>) => {
        try {
            dispatch({type: AuthActionTypes.REGISTER_USER})
            const response = await axios.post('http://95.31.196.92:3000/auth/register', body)
            dispatch({
                type: AuthActionTypes.REGISTER_USER_SUCCESS, message: response.data
            })
        }
        catch(e) {
            console.log(e)
            dispatch({
                type: AuthActionTypes.REGISTER_USER_ERROR, errors: e
            })
        }
    }
}

export const loginRequest = (body : LoginRequestBody) => {
    return async (dispatch : Dispatch<LoginAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN_USER})
            const response = await axios.post('http://95.31.196.92:3000/auth/login', body)
            dispatch({
                type: AuthActionTypes.LOGIN_USER_SUCCESS, message: response.data
            })
        }
        catch(e) {
            console.log(e)
            dispatch({
                type: AuthActionTypes.LOGIN_USER_ERROR, errors: e
            })
        }
    }
}