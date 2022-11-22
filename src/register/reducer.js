import { REGISTER_FAILURE, REGISTER_SUCCESS } from './actionTypes'

const initialState  = {
    error_code: null,
    message: null
}

export function registerReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                error_code: null,
                message: REGISTER_SUCCESS
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error_code: action.payload.error_code,
                message: action.payload.message
            }
        default:
            return state
        }
}
