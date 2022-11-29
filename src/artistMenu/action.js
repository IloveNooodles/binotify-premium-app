import { GET_SONGS, UPDATE_SONGS, DELETE_SONG } from "./actionTypes";

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

export function deleteSong(songId) {
    return {
        type: DELETE_SONG,
        payload: songId
    }
}