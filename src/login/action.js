import {LOGIN, LOGOUT, LOGIN_SUCCESS} from './actionTypes'

export function login(user) {
    return {
        type: LOGIN,
        payload: user
    }
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}