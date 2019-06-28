import React from 'react';
import { mount } from 'enzyme';
import { InputBase } from '@material-ui/core';
import TimelinesSearch from './TimelinesSearch';

describe('<TimelinesSearch/>', () => {
  let wrapper;
  let onSubmitFn;

  beforeEach(() => {
    onSubmitFn = jest.fn();
    wrapper = mount(<TimelinesSearch onSubmit={onSubmitFn} />);
  });

  it('should render an input element', () => {
    const input = wrapper.find(InputBase);
    expect(input).toHaveLength(1);
    expect(input.prop('name')).toEqual('username');
  });

  it('calls onSubmit prop function when form is submitted', () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});
