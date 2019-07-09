import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './index';

describe('<Header />', () => {
  it('should mount properly', () => {
    const wrapper = mount(
    <Router>
      <Header />
    </Router>
    );

    expect(wrapper.find('header')).toMatchSnapshot();
  });

  it('should mount logged header properly', () => {
    const wrapper = mount(
    <Router>
      <Header autenticated />
    </Router>
    );

    expect(wrapper.find('header')).toMatchSnapshot();
  });
});
