import { createStore, applyMiddleware } from 'redux';
import * as storage from 'redux-storage';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';
import finalReducer from './reducer';
import runSaga from './sagas/run';

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const reducer = storage.reducer(finalReducer);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({
    level: 'info',
    collapsed: true,
  }));
}

const store = createStore(reducer, {}, applyMiddleware(...middlewares));
sagaMiddleware.run(runSaga);

export default store;
