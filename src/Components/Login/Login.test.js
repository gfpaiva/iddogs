import React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';''

import Login from './index';
import * as Auth from '../../Utils/Auth';

import signup from '../../../__mocks__/signup';

const inputValue = 'your@email.com';

describe('<Login />', () => {
  it('should mount properly', () => {
    const wrapper = mount(
    <Router>
      <Login />
    </Router>
    );

    expect(wrapper.find('.login')).toMatchSnapshot();
  });

  it('should fill input', () => {
    const wrapper = mount(
      <Router>
        <Login />
      </Router>
    );

    wrapper
      .find('input#email')
      .simulate('change', {
        persist: () => {},
        target: { value: inputValue, name: 'email' }
      });

    const newValue = wrapper.find('input#email').props().value

    expect(newValue).toBe(inputValue);
  });

  it('should submit form', async () => {
    fetch
      .once(JSON.stringify(signup));

    const setLoginSpy = jest.spyOn(Auth, 'setLogin');

    const wrapper = mount(
      <Router>
        <Login />
      </Router>
    );

    wrapper
      .find('input#email')
      .simulate('change', {
        persist: () => {},
        target: { value: inputValue, name: 'email' }
      });

    wrapper
      .find('form')
      .simulate('submit');

    await wait();
    wrapper.update();

    expect(setLoginSpy).toHaveBeenCalled();
  });

  it('should show message for invalid input', async () => {
    const wrapper = mount(
      <Router>
        <Login />
      </Router>
    );

    const inputValue = 'invalidemail';

    wrapper
    .find('input#email')
    .simulate('change', {
      persist: () => {},
      target: { value: inputValue, name: 'email' }
    });

    wrapper
      .find('form')
      .simulate('submit');

    await wait();
    wrapper.update();

    expect(wrapper.find('.login__input-message--error')).toHaveLength(1);
  });

  it('should submit form and get errors properly', async () => {
    fetch
      .mockRejectOnce('ERRO')

    const wrapper = mount(
      <Router>
        <Login />
      </Router>
    );

    wrapper
    .find('input#email')
    .simulate('change', {
      persist: () => {},
      target: { value: inputValue, name: 'email' }
    });

    wrapper
      .find('form')
      .simulate('submit');

    await wait();
    wrapper.update();

    expect(wrapper.find('.login__input-message--error-fetch')).toHaveLength(1);
  });
});
