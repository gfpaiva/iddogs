import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FaDog } from 'react-icons/fa';

import Login from '../../Components/Login';
import { IsAutenticated } from '../../Utils/Auth';

import './Signup.scss';

export default function Signup({ checkAutenticated }) {
  if (checkAutenticated()) return <Redirect to="/feed/husky" />;

  return (
    <div className="signup text-center">
      <div className="signup__content">
        <FaDog className="signup__icon" />

        <p className="signup__welcome">
          Bem vindo ao&nbsp;
          <strong>IDDogs.</strong>
          <br />
          Uma galeria com fotos de cachorros filtrados pelas raças: husky, labrador, hound e pug.
        </p>

        <p className="signup__start">
          Para começar faça o login abaixo com o seu e-mail:
        </p>

        <Login />
      </div>
    </div>
  );
}

Signup.defaultProps = {
  checkAutenticated: IsAutenticated,
};

Signup.propTypes = {
  checkAutenticated: PropTypes.func,
};
