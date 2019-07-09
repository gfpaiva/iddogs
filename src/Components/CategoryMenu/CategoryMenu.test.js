import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import CategoryMenu from './index';

describe('<CategoryMenu />', () => {
  it('should mount properly', () => {
    const wrapper = mount(
      <Router>
        <CategoryMenu />
      </Router>
    );

    expect(wrapper.find('.category-menu')).toMatchSnapshot();
  })
});
