import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_SONGS } from "./actionTypes";
import * as actions from './action'
import { callGetSongs } from './api';

function* getSongs(action) {
    yield put(actions.loading())
    const response = yield call(callGetSongs, action.payload)
    if (response.status === 'OK') {
        yield put(actions.updateSongs(response.data))
    }
    else {
        yield put(actions.updateSongs([]))
    }
}

const artistMenuSaga = [
    takeLatest(GET_SONGS, getSongs)
]

export default artistMenuSaga