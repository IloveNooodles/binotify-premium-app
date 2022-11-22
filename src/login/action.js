import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes'

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

export function loginFailure(message, error_code) {
    return {
        type: LOGIN_FAILURE,
        payload: {
            message,
            error_code
        }
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}