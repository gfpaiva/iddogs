import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import Button from '../Button';
import { IsAutenticated, logoff } from '../../Utils/Auth';

import './Header.scss';

function Header({ history: { push } }) {
  const logoffHandler = () => {
    logoff();
    push('/signup');
  };

  const autenticated = IsAutenticated();

  return (
    <header className={`header container${!autenticated ? ' header--not-logged' : ''}`}>
      <h1 className="header__title my-0">
        <Link to="/" className="header__logo">
          <strong>ID</strong>
          Dogs
        </Link>
      </h1>
      {autenticated && (
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

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Header);
