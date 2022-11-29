import { UPDATE_SONGS } from "./actionTypes";

const initialState = {
    songs: [],
    loading: true
}

export function artistMenuReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SONGS:
            return {
                ...state,
                songs: action.payload,
                loading: false
            }
        default:
            return state
    }
}