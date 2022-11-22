import { call, put, takeLatest } from '@redux-saga/core/effects'

import { LOGIN, LOGOUT } from './actionTypes'
import * as actions from './action'
import { callLogin } from './api'
import { storage } from '../common/storage'

function* login(action) {
    const response = yield call(callLogin, action.payload)
    if (response.status === 'OK') {
        yield put(actions.loginSuccess(response))
        storage.setToken(response.data.token)
        window.location.href = '/'
    }
    else {
        yield put(actions.loginFailure(response.data.message, response.data.error_code))
    }
}

function* logout(_) {
    storage.removeCreds()
    window.location.href = '/'
}

const loginSaga = [
	takeLatest(LOGIN, login),
    takeLatest(LOGOUT, logout)
]

export default loginSaga