import { SUCCESS_ADD_SONG, FAILED_ADD_SONG } from "./actionTypes";

const initialState = {
    error_code: null,
    message: null
}

export function insertSongReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_ADD_SONG:
            return {
                ...state,
                error_code: '-1',
                message: 'Add song success'
            }
        case FAILED_ADD_SONG:
            return {
                ...state,
                error_code: action.payload.error_code,
                message: action.payload.message
            }
        default:
            return state
    }
}