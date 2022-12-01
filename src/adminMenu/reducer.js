import { UPDATE_REQUESTS } from "./actionTypes";

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
        default:
            return state
    }
}