import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

import {loginReducer} from '../login/reducer'
import rootSaga from './saga'

const rootReducer = combineReducers({
        login: loginReducer
    })

const sagaMiddleware = createSagaMiddleware();

const enhancers = applyMiddleware(sagaMiddleware)

export const store = createStore(rootReducer, enhancers)

sagaMiddleware.run(rootSaga)