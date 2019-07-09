import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';

import Signup from './index';

describe('<Signup />', () => {
	it('should mount logged off properly', () => {
		const wrapper = mount(
      <Router>
        <Signup />
      </Router>
    );

		expect(wrapper.find('.signup')).toMatchSnapshot();
  });

	it('should mount logged in properly', () => {
    const checkAutenticated = jest.fn();
    checkAutenticated.mockReturnValue(true);

		const wrapper = mount(
      <Router>
        <Signup checkAutenticated={checkAutenticated} />
      </Router>
    );

		expect(wrapper.find('Redirect').prop('to')).toBe('/feed/husky');
	});
});
