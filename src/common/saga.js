import {all} from 'redux-saga/effects'

import registerSaga from '../register/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
	yield all([
        ...registerSaga,
        ...authSaga,
    ]);
}