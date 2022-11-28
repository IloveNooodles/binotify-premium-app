import { SET_USER, REMOVE_USER, LOGIN_FAILURE } from './actionTypes'

const initialState  = {
    user: null,
    error_code: null,
    message: null,
    loading: true
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
                error_code: action.payload.error_code,
                message: action.payload.message
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case REMOVE_USER:
            return {
                ...state,
                user: null,
                loading: false
            }
        default:
            return state
        }
}
