import { put, takeLatest, all, call, delay } from 'redux-saga/effects';
import moment from 'moment';
import { getUserTimeline } from './timelinesApi';
import { getTimelinesSuccess, getTimelinesError } from './timelinesActions';

const timelinesMapper = data =>
  data.map(
    ({
      id,
      text,
      created_at: createdAt,
      user: { name, screen_name: screenName, profile_image_url: profileImage },
      retweet_count: retweets,
      favorite_count: likes,
      quoted_status: quotedTweet,
    }) => ({
      id,
      text,
      name,
      createdAt: moment(createdAt, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format(
        'LL',
      ),
      screenName,
      profileImage,
      retweets,
      likes,
      quotedTweet,
    }),
  );

function* getTimeline({ payload: { username } }) {
  yield delay(500);
  try {
    const data = yield call(getUserTimeline, username);
    yield put(getTimelinesSuccess(timelinesMapper(data)));
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
