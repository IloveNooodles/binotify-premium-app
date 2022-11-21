import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import {loginReducer} from '../login/reducer'
import {registerReducer} from '../register/reducer'
import rootSaga from './saga'

const rootReducer = combineReducers({
        login: loginReducer,
        register: registerReducer
    })

const sagaMiddleware = createSagaMiddleware();

const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))

export const store = createStore(rootReducer, enhancers)

sagaMiddleware.run(rootSaga)