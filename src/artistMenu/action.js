import { GET_SONGS, UPDATE_SONGS, LOADING } from "./actionTypes";

export function getSongs(limit, page) {
    return {
        type: GET_SONGS,
        payload: {
            limit,
            page
        }
    }
}

export function updateSongs(songs) {
    return {
        type: UPDATE_SONGS,
        payload: songs
    }
}

export function loading() {
    return {
        type: LOADING,
        payload: []
    }
}