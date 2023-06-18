import axios from 'axios'
import { Dispatch } from "react";
import { API_URL } from '.';
import { UserFetchAction, UserFetchActionTypes, UserSearchAction, UserSearchActionTypes } from '../store/types/UserTypes';

export const getUserByUsername = (username: string) => {
    return async (dispatch : Dispatch<UserFetchAction>) => {
        try {
            dispatch({type: UserFetchActionTypes.USER_FETCH_LOADING, username})
            const response = await axios.get(`${API_URL}/users/${username}`, {withCredentials: true})
            dispatch({
                type: UserFetchActionTypes.USER_FETCH_SUCCESS, user: response.data,
            })
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                const e = error.response?.data === undefined ? error : error.response?.data
                dispatch({
                    type: UserFetchActionTypes.USER_FETCH_ERROR, username, error: e
                })
            }
        }
    }
}

export const searchUsersQuery = (query: string) => {
    return async (dispatch : Dispatch<UserSearchAction>) => {
        try {
            dispatch({type: UserSearchActionTypes.USER_SEARCH_LOADING, query})
            const response = await axios.get(`${API_URL}/users/search/${query}`, {withCredentials: true})
            dispatch({
                type: UserSearchActionTypes.USER_SEARCH_SUCCESS, users: response.data,
            })
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                const e = error.response?.data === undefined ? error : error.response?.data
                dispatch({
                    type: UserSearchActionTypes.USER_SEARCH_ERROR, error: e
                })
            }
        }
    }
}