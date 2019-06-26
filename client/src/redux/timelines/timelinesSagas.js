import { put, takeLatest, all, call, delay } from 'redux-saga/effects';
import { getUserTimeline } from './timelinesApi';
import { getTimelinesSuccess, getTimelinesError } from './timelinesActions';

function* getTimeline({ payload: { username } }) {
  yield delay(500);
  try {
    const data = yield call(getUserTimeline, username);
    yield put(getTimelinesSuccess(data));
  } catch (err) {
    yield put(getTimelinesError(err));
  }
}

function* watchGetUserTimeline() {
  yield takeLatest('GET_TIMELINES_START', getTimeline);
}

export default function* rootSaga() {
  yield all([watchGetUserTimeline()]);
}
