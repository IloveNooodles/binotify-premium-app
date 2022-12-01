import { call, put, take, takeLatest } from 'redux-saga/effects';

import { GET_REQUESTS, ACCEPT_REQUEST, REJECT_REQUEST } from "./actionTypes";
import * as actions from './action'
import { callAcceptRequest, callRejectRequest, callGetRequests } from './api';

function* getRequests(action) {
    const response = yield call(callGetRequests, action.payload)
    if (response.status === 'OK') {
        yield put(actions.updateRequests(response.data))
    }
    else {
        yield put(actions.updateRequests([]))
    }
}

function* acceptRequest(action) {
    const response = yield call(callAcceptRequest, action.payload)
    if (response.status !== 'OK') {
        yield put(actions.desicionRequestFailed(response.data.message, response.data.error_code))
    }
}

function* rejectRequest(action) {
    const response = yield call(callRejectRequest, action.payload)
    if (response.status !== 'OK') {
        yield put(actions.desicionRequestFailed(response.data.message, response.data.error_code))
    }
}

const adminMenuSaga = [
    takeLatest(GET_REQUESTS, getRequests),
    takeLatest(ACCEPT_REQUEST, acceptRequest),
    takeLatest(REJECT_REQUEST, rejectRequest),
]

export default adminMenuSaga