import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import feed from '../../../__mocks__/getFeed';

import Grid from './index';

describe('<Grid />', () => {
  it('should mount properly', () => {
    const wrapper = mount(
      <Router>
        <Grid items={feed.list} />
      </Router>
    );

    expect(wrapper.find(Grid)).toMatchSnapshot();
  })
});
