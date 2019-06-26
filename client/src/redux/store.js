import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import timelinesReducers from './timelines/timelinesReducers';
import timelinesSagas from './timelines/timelinesSagas';

const rootReducer = combineReducers({
  userTimeline: timelinesReducers,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(timelinesSagas);

export default store;
