import { combineReducers } from 'redux';
import { Type } from './timelinesActions';

const timelinesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.GET_TIMELINES_SUCCESS:
      return payload.timelines;

    default:
      return state;
  }
};

const searchReducer = (state = '', { type, payload }) => {
  switch (type) {
    case Type.GET_TIMELINES_START:
      return payload.username;

    default:
      return state;
  }
};

export default combineReducers({
  searchQuery: searchReducer,
  timelines: timelinesReducer,
});
