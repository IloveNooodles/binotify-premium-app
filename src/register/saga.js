import { call, put, takeLatest } from '@redux-saga/core/effects'

import { REGISTER } from './actionTypes'
import * as actions from './action'
import { callRegister } from './api'

function* register(action) {
    const response = yield call(callRegister, action.payload)
    if (response.status == 'OK') {
        yield put(actions.registerSuccess(response))
        window.location.href = '/login'
    }
    else {
        yield put(actions.registerFailure(response.data.message, response.data.error_code))
    }
}

const registerSaga = [
	takeLatest(REGISTER, register),
]

export default registerSaga