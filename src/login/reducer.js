import { LOGIN_FAILURE, LOGIN_SUCCESS } from './actionTypes'

const initialState  = {
    user: null,
    error_code: null,
    message: null
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                error_code: null,
                message: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error_code: action.payload.error_code,
                message: action.payload.message
            }
        default:
            return state
        }
}
