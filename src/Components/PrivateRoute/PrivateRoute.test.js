import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './index';
import CategoryMenu from '../../Components/CategoryMenu';

describe('<PrivateRoute />', () => {
  it('should mount logged off properly', () => {
    const wrapper = mount(
      <Router>
        <PrivateRoute
          component={CategoryMenu}
        />
      </Router>
    );

    expect(wrapper.find('Redirect')).toHaveLength(1);
  });

  it('should mount logged in properly', () => {
    const checkAutenticated = jest.fn();
    checkAutenticated.mockReturnValue(true);

    const wrapper = mount(
      <Router>
        <PrivateRoute
          component={CategoryMenu}
          checkAutenticated={checkAutenticated}
        />
      </Router>
    );

    expect(wrapper.find('CategoryMenu')).toHaveLength(1);
  });
});
