import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Home from './index';

describe('<Home />', () => {
	it('should mount logged off properly', () => {
		const wrapper = mount(
      <Router>
        <Home />
      </Router>
    );

		expect(wrapper.find('Redirect').prop('to')).toBe('signup');
  });

	it('should mount logged in properly', () => {
    const checkAutenticated = jest.fn();
    checkAutenticated.mockReturnValue(true);

		const wrapper = mount(
      <Router>
        <Home checkAutenticated={checkAutenticated} />
      </Router>
    );

		expect(wrapper.find('Redirect').prop('to')).toBe('/feed/husky');
	});
});
