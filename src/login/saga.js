import { call, put, takeLatest } from '@redux-saga/core/effects'

import { LOGIN, LOGOUT } from './actionTypes'
import * as actions from './action'
import { callLogin } from './api'

function* login(action) {
    const response = yield call(callLogin, action.payload)
    if (response) {
        yield put(actions.loginSuccess(response))
    }
    // else {
    //     yield put(actions.loginFailure())
    // }
}

function* logout(action) {
    const response = yield call(calLogout, action.payload)
}

const loginSaga = [
	takeLatest(LOGIN, login),
    takeLatest(LOGOUT, logout)
]

export default loginSaga