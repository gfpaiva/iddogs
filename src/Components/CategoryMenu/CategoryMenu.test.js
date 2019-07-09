import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import CategoryMenu from './index';

describe('<CategoryMenu />', () => {
  it('should mount with active link properly', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/feed/husky' }]}>
        <CategoryMenu />
      </MemoryRouter>
    );

    expect(wrapper.find('.category-menu')).toMatchSnapshot();
  })
});
