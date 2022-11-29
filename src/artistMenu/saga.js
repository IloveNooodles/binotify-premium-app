import { call, put, takeLatest } from 'redux-saga/effects';

import { DELETE_SONG, GET_SONGS } from "./actionTypes";
import * as actions from './action'
import { callGetSongs, callDeleteSong } from './api';

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

const artistMenuSaga = [
    takeLatest(GET_SONGS, getSongs),
    takeLatest(DELETE_SONG, deleteSong)
]

export default artistMenuSaga