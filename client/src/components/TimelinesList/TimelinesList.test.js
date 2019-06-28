import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TimelinesList } from './TimelinesList';

describe('<TimelinesList/> component', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      items: [],
      getTimelines: jest.fn(),
      history: {
        location: {
          search: 'query',
        },
      },
    };
    wrapper = shallow(<TimelinesList {...props} />);
  });

  it('renders without crashing given the required propss', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
