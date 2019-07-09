import React from 'react';
import { mount } from 'enzyme';

import StyledInput from './index';

describe('<StyledInput />', () => {
  it('should mount properly', () => {
    const wrapper = mount(<StyledInput id="test" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should style properly on focus and blur', () => {
    const wrapper = mount(<StyledInput id="test" />);

    wrapper.find('input').simulate('focus');

    expect(wrapper.find('label').hasClass('styled-input--active')).toBeTruthy();

    wrapper.find('input').simulate('blur');

    expect(wrapper.find('label').hasClass('styled-input--active')).toBeFalsy();
  });

  it('should style properly on filled', () => {
    const wrapper = mount(<StyledInput id="test" filled />);

    expect(wrapper.find('label').hasClass('styled-input--active')).toBeTruthy();
  });

  it('should style properly on error', () => {
    const wrapper = mount(<StyledInput id="test" error />);

    expect(wrapper.find('label').hasClass('styled-input--error')).toBeTruthy();
  });
});
