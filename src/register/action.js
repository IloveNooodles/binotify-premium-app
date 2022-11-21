import {REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS} from './actionTypes'

export function register(user) {
    return {
        type: REGISTER,
        payload: user
    }
}

export function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    }
}

export function registerFailure(message, error_code) {
    return {
        type: REGISTER_FAILURE,
        payload: {
            message,
            error_code
        }
    }
}