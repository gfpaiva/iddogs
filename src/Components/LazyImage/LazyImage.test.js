import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';''

import feed from '../../../__mocks__/getFeed';

import LazyImage from './index';

describe('<LazyImage />', () => {
  it('should mount properly', () => {
    const wrapper = mount(
    <Router>
      <LazyImage
        id={0}
        image={feed.list[0]}
      />
    </Router>
    );

    expect(wrapper.find('.lazy-image')).toMatchSnapshot();
  });

  it('should add backgroundImage when visible', () => {
    const wrapper = mount(
    <Router>
      <LazyImage
        id={0}
        image={feed.list[0]}
        forceVisible
      />
    </Router>
    );

    expect(wrapper.find('.lazy-image__image').props().style).toHaveProperty('backgroundImage');
  });

  it('should show zoom with click handler', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LazyImage
          id={0}
          image={feed.list[0]}
          forceVisible
        />
      </MemoryRouter>
    );

    wrapper.find('.lazy-image__image').simulate('click');

    expect(wrapper.find('Zoom')).toHaveLength(1);
  });
});
