import { UPDATE_REQUESTS, DESICION_REQUEST_FAILED } from "./actionTypes";

const initialState = {
    requests: [],
    loading: true,
    error_code: null,
    message: null
}

export function adminMenuReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_REQUESTS:
            return {
                ...state,
                requests: action.payload,
                loading: false
            }
        case DESICION_REQUEST_FAILED:
            return {
                ...state,
                error_code: action.payload.error_code,
                message: action.payload.message,
                loading: false
            }
        default:
            return state
    }
}