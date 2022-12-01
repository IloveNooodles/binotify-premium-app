import { ADD_SONG, SUCCESS_ADD_SONG, FAILED_ADD_SONG } from "./actionTypes";

export const addSong = (songData) => {
    return {
        type: ADD_SONG,
        payload: songData,
    };
}

export const successAddSong = () => {
    return {
        type: SUCCESS_ADD_SONG
    };
}

export const failedAddSong = (message, error_code) => {
    return {
        type: FAILED_ADD_SONG,
        payload: {
            message,
            error_code
        }
    }
}