import React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';''

import Feed from './index';

import getFeed from '../../../__mocks__/getFeed';

describe('<Feed />', () => {
  it('should mount properly', () => {
		const wrapper = mount(
      <Router>
        <Feed match={{ params: { category: 'husky' } }} />
      </Router>
    );

		expect(wrapper.find('Feed')).toMatchSnapshot();
  });

  it('should mount with data properly', async () => {
    fetch
      .once(JSON.stringify(getFeed));

		const wrapper = mount(
      <Router>
        <Feed match={{ params: { category: 'husky' } }} />
      </Router>
    );

    await wait();
    wrapper.update();

		expect(wrapper.find('CategoryMenu')).toHaveLength(1);
		expect(wrapper.find('Grid')).toHaveLength(1);
  });

  it('should mount with fetch error properly', async () => {
    fetch
      .mockRejectOnce('ERRO')

		const wrapper = mount(
      <Router>
        <Feed match={{ params: { category: 'husky' } }} />
      </Router>
    );

    await wait();
    wrapper.update();

		expect(wrapper.find('Feed')).toMatchSnapshot();
  });
});
