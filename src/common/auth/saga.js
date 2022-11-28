import { call, put, takeLatest } from '@redux-saga/core/effects'

import { GET_USER, LOGIN, LOGOUT } from './actionTypes'
import * as actions from './action'
import { callGetUser, callLogin } from './api'
import { storage } from '../storage'

function* user(action) {
    const response = yield call(callGetUser, action.payload)
    if (response.status === 'OK') {
        yield put(actions.setUser(response.data))
    }
    else {
        yield put(actions.removeUser())
    }
}

function* login(action) {
    const response = yield call(callLogin, action.payload)
    if (response.status === 'OK') {
        storage.setToken(response.data.token)
        window.location.href = '/'
    }
    else {
        yield put(actions.loginFailure(response.data.message, response.data.error_code))
    }
}

function* logout(_) {
    storage.removeCreds()
    yield put(actions.removeUser())
}

const authSaga = [
	takeLatest(GET_USER, user),
    takeLatest(LOGIN, login),
    takeLatest(LOGOUT, logout)
]

export default authSaga