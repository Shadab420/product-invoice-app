import { SET_AUTH_USER, GET_AUTH_USER } from '../types/types';

export const setAuthUser = user => {
    return {
        type: SET_AUTH_USER,
        payload: user
    }
}

export const getAuthUser = user => {
    return {
        type: GET_AUTH_USER,
        payload: null
    }
}