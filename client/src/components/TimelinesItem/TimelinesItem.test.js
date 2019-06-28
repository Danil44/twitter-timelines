import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimelinesItem from './TimelinesItem';

describe('<TimelinesItem/> component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      text: 'text',
      name: 'name',
      createdAt: 'date',
      screenName: 'name',
      profileImage: 'image url',
      retweets: 0,
      likes: 0,
      quotedTweet: {
        user: {
          name: 'name',
          screen_name: 'screen name',
          profile_image_url: 'profile image url',
        },
        created_at: 'date',
        text: 'text',
      },
    };

    wrapper = shallow(<TimelinesItem {...props} />);
  });

  it('should renders without crashing given the required props', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
