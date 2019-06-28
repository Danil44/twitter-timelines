import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimelinesQuotedTweet from './TimelinesQuotedTweet';

describe('<TimelinesQuotedTweet/> component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      user: {
        name: 'name',
        screen_name: 'screen name',
        profile_image_url: 'profile image url',
      },
      created_at: 'date',
      text: 'text',
    };

    wrapper = shallow(<TimelinesQuotedTweet {...props} />);
  });

  it('should renders without crashing given the required props', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
