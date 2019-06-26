import React from 'react';
import { shallow } from 'enzyme';
import TimelinesSearch from '../components/TimelinesSearch/TimelinesSearch';

describe('<TimelinesSearch /> rendering', () => {
  it('should render <form> and <input> inside of it', () => {
    const wrapper = shallow(<TimelinesSearch />);
    expect(wrapper.children('form'));
  });
});
