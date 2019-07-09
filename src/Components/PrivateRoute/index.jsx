import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IsAutenticated } from '../../Utils/Auth';

export default function PrivateRoute({ component: Component, checkAutenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (checkAutenticated()) return <Component {...props} />;

        return (
          <Redirect
            to={{
              pathname: '/signup',
            }}
          />
        );
      }
      }
    />
  );
}

PrivateRoute.defaultProps = {
  checkAutenticated: IsAutenticated,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.any,
  ]).isRequired,
  checkAutenticated: PropTypes.func,
};
