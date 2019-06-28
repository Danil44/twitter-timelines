import timelinesReducers from './timelinesReducers';

const initialState = {
  searchQuery: '',
  timelines: [],
};

describe('timelines reducers', () => {
  it('should return initial state', () => {
    expect(timelinesReducers(undefined, {})).toEqual(initialState);
  });

  it('should store timelines list upon successful request', () => {
    const action = {
      type: 'GET_TIMELINES_SUCCESS',
      payload: {
        timelines: [
          {
            id: '123',
            text: 'text',
            name: 'name',
            createdAt: 'created date',
            screenName: 'screen name',
            profileImage: 'image',
            retweets: 0,
            likes: 0,
            quotedTweet: {},
          },
        ],
      },
    };

    const nextState = {
      searchQuery: '',
      timelines: [
        {
          id: '123',
          text: 'text',
          name: 'name',
          createdAt: 'created date',
          screenName: 'screen name',
          profileImage: 'image',
          retweets: 0,
          likes: 0,
          quotedTweet: {},
        },
      ],
    };

    expect(timelinesReducers(initialState, action)).toEqual(nextState);
  });

  it('should store searched query on request start', () => {
    const action = {
      type: 'GET_TIMELINES_START',
      payload: { username: 'username' },
    };

    const nextState = {
      searchQuery: 'username',
      timelines: [],
    };

    expect(timelinesReducers(initialState, action)).toEqual(nextState);
  });
});
