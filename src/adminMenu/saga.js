import { call, put, take, takeLatest } from 'redux-saga/effects';

import { GET_REQUESTS, ACCEPT_REQUEST, REJECT_REQUEST } from "./actionTypes";
import * as actions from './action'
import { callGetRequests } from './api';

function* getRequests(action) {
    const response = yield call(callGetRequests, action.payload)
    if (response.status === 'OK') {
        yield put(actions.updateRequests(response.data))
    }
    else {
        yield put(actions.updateRequests([]))
    }
}

const adminMenuSaga = [
    takeLatest(GET_REQUESTS, getRequests)
]

export default adminMenuSaga