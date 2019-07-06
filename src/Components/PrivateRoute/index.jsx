import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ Component, ...rest }) {
  const auth = localStorage.getItem('auth');

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;

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
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
