import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';''

import feed from '../../../__mocks__/getFeed';

import Zoom from './index';

describe('<Zoom />', () => {
  it('should mount properly', () => {
    const setZoom = jest.fn();

    const wrapper = mount(
      <Router>
        <Zoom
          id={0}
          image={feed.list[0]}
          setZoom={setZoom}
        />
      </Router>
    );

    expect(wrapper.find('.zoom')).toMatchSnapshot();
  });

  it('should close on click in overlay', () => {
    const setZoom = jest.fn();

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ pathname: '/feed/husky/0' }]}>
        <Zoom
          id={0}
          image={feed.list[0]}
          setZoom={setZoom}
        />
      </MemoryRouter>
    );

    wrapper.find('.zoom__mask').simulate('click');
    expect(setZoom).toHaveBeenCalled();
  });
});
