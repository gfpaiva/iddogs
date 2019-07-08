import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IsAutenticated } from '../../Utils/Auth';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (IsAutenticated()) return <Component {...props} />;

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

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.any,
  ]).isRequired,
};
