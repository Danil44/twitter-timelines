export const Type = {
  GET_TIMELINES_START: 'GET_TIMELINES_START',
  GET_TIMELINES_SUCCESS: 'GET_TIMELINES_SUCCESS',
  GET_TIMELINES_ERROR: 'GET_TIMELINES_ERROR',
};

export const getTimelinesStart = username => ({
  type: Type.GET_TIMELINES_START,
  payload: { username },
});

export const getTimelinesSuccess = timelines => ({
  type: Type.GET_TIMELINES_SUCCESS,
  payload: { timelines },
});

export const getTimelinesError = error => ({
  type: Type.GET_TIMELINES_ERROR,
  payload: { error },
});
