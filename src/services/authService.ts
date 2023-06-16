import axios from 'axios'
import { Dispatch } from "react";
import { RegisterAction, LoginAction, AuthActionTypes, SessionActionTypes, SessionAction } from '../store/types/AuthTypes';
import { API_URL } from '.';

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
            const response = await axios.post(`${API_URL}/auth/register`, body)
            dispatch({
                type: AuthActionTypes.REGISTER_USER_SUCCESS, message: response.data
            })
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                dispatch({
                    type: AuthActionTypes.REGISTER_USER_ERROR, errors: error.response?.data
                })
            }
        }
    }
}

export const loginRequest = (body : LoginRequestBody) => {
    return async (dispatch : Dispatch<LoginAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOGIN_USER})
            const response = await axios.post(`${API_URL}/auth/login`, body, {withCredentials: true})
            dispatch({
                type: AuthActionTypes.LOGIN_USER_SUCCESS, message: response.data
            })
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                dispatch({
                    type: AuthActionTypes.LOGIN_USER_ERROR, errors: error.response?.data
                })
            }
        }
    }
}

export const getCurrentUser = () => {
    return async (dispatch : Dispatch<SessionAction>) => {
        try {
            dispatch({type: SessionActionTypes.SESSION_LOAD})
            const response = await axios.get(`${API_URL}/auth/me`, {withCredentials: true})
            dispatch({
                type: SessionActionTypes.SESSION_LOAD_SUCCESS, user: response.data
            })
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                dispatch({
                    type: SessionActionTypes.SESSION_LOAD_ERROR, errors: error.response?.data
                })
            }
        }
    }
}