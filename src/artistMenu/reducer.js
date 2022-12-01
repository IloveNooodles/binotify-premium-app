import { FAILED_UPDATE_SONG, UPDATE_SONGS, SUCCESS_UPDATE_SONG } from "./actionTypes";

const initialState = {
    songs: [],
    loading: true,
    error_code: null,
    message: null
}

export function artistMenuReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SONGS:
            return {
                ...state,
                songs: action.payload,
                loading: false
            }
        case SUCCESS_UPDATE_SONG:
            return {
                ...state,
                error_code: '-1',
                message: null
            }
        case FAILED_UPDATE_SONG:
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