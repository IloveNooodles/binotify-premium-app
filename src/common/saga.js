import {all} from 'redux-saga/effects'
import artistMenuSaga from '../artistMenu/saga';
import insertSongSaga from '../insertSong/saga';

import registerSaga from '../register/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
	yield all([
        ...registerSaga,
        ...authSaga,
        ...artistMenuSaga,
        ...insertSongSaga
    ]);
}