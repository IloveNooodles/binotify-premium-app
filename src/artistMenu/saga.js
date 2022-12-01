import { call, put, take, takeLatest } from 'redux-saga/effects';

import { DELETE_SONG, GET_SONGS, UPDATE_SONG } from "./actionTypes";
import * as actions from './action'
import { callGetSongs, callDeleteSong, callUpdateSong } from './api';

function* getSongs(action) {
    const response = yield call(callGetSongs, action.payload)
    if (response.status === 'OK') {
        yield put(actions.updateSongs(response.data))
    }
    else {
        yield put(actions.updateSongs([]))
    }
}

function* deleteSong(action) {
    const response = yield call(callDeleteSong, action.payload)
    if (response.status === 'OK') {
        yield put(actions.getSongs(10, 1))
    }
}

function* updateSong(action) {
    const response = yield call(callUpdateSong, action.payload)
    if (response.status === 'OK') {
        yield put(actions.getSongs(10, 1))
        yield put(actions.successUpdateSong())
    } else {
        yield put(actions.failedUpdateSong(response.data.message, response.data.error_code))
    }
}

const artistMenuSaga = [
    takeLatest(GET_SONGS, getSongs),
    takeLatest(DELETE_SONG, deleteSong),
    takeLatest(UPDATE_SONG, updateSong)
]

export default artistMenuSaga