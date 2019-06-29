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
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should change input value and call onSubmit which is calls history.replace', () => {
    const input = wrapper.find('input');
    input.instance().value = 'username';
    input.simulate('change');

    expect(wrapper.state().username).toEqual('username');

    wrapper.instance().handleSubmit();
    expect(props.onSubmit.mock.calls.length).toBe(1);
    expect(props.history.replace.mock.calls.length).toBe(1);
  });
});
