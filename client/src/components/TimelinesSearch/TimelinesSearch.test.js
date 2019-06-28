import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TimelinesSearch } from './TimelinesSearch';

describe('<TimelinesSearch/>', () => {
  let wrapper;

  const props = {
    onSubmit: jest.fn(),
    history: { replace: jest.fn() },
  };

  beforeEach(() => {
    wrapper = mount(<TimelinesSearch {...props} />);
  });

  it('should renders without crashing given the required props', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call handleSubmit method which calls onSubmit prop', () => {
    wrapper.instance().handleSubmit();

    expect(props.onSubmit.mock.calls.length).toBe(1);
  });
});
