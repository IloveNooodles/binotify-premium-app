import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import {registerReducer} from '../register/reducer'
import rootSaga from './saga'
import { authReducer } from './auth/reducer';

const rootReducer = combineReducers({
        register: registerReducer,
        auth: authReducer,
    })

const sagaMiddleware = createSagaMiddleware();

const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))

export const store = createStore(rootReducer, enhancers)

sagaMiddleware.run(rootSaga)