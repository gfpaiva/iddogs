import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IsAutenticated } from '../../Utils/Auth';

export default function Home({ checkAutenticated }) {
  if (checkAutenticated()) return <Redirect to="/feed/husky" />;

  return <Redirect to="signup" />;
}

Home.defaultProps = {
  checkAutenticated: IsAutenticated,
};

Home.propTypes = {
  checkAutenticated: PropTypes.func,
};
