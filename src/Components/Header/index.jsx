import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import Button from '../Button';
import { IsAutenticated, logoff } from '../../Utils/Auth';

import './Header.scss';

function Header({ autenticated, history: { push } }) {
  const logoffHandler = () => {
    logoff();
    push('/signup');
  };

  const isAutenticated = autenticated || IsAutenticated();

  return (
    <header className={`header container${!isAutenticated ? ' header--not-logged' : ''}`}>
      <h1 className="header__title my-0">
        <Link to="/" className="header__logo">
          <strong>ID</strong>
          Dogs
        </Link>
      </h1>
      {isAutenticated && (
        <Button
          small
          onClick={logoffHandler}
          type="button"
        >
          <FaPowerOff />
        </Button>
      )}
    </header>
  );
}

Header.defaultProps = {
  autenticated: false,
};

Header.propTypes = {
  autenticated: PropTypes.bool,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
