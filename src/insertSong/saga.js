import { call, put, take, takeLatest } from 'redux-saga/effects';

import { ADD_SONG } from "./actionTypes";
import * as actions from './action'
import { callInsertSong } from './api'

function* addSong(action) {
    const response = yield call(callInsertSong, action.payload)
    if (response.status === 'OK') {
        yield put(actions.successAddSong())
    } else {
        yield put(actions.failedAddSong(response.data.message, response.data.error_code))
    }
}

const insertSongSaga = [
    takeLatest(ADD_SONG, addSong)
]

export default insertSongSaga;