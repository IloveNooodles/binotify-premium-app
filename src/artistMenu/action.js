import { GET_SONGS, UPDATE_SONGS, DELETE_SONG, UPDATE_SONG, FAILED_UPDATE_SONG, SUCCESS_UPDATE_SONG } from "./actionTypes";

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

export function updateSong(data) {
    return {
        type: UPDATE_SONG,
        payload: data
    }
}

export function successUpdateSong() {
    return {
        type: SUCCESS_UPDATE_SONG
    }
}

export function failedUpdateSong(message, error_code) {
    return {
        type: FAILED_UPDATE_SONG,
        payload: {
            message,
            error_code
        }
    }
}

export function resetUpdateSongError() {
    return {
        type: FAILED_UPDATE_SONG,
        payload: {
            message: null,
            error_code: null
        }
    }
}