import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { FaPaw } from 'react-icons/fa';

import Button from '../Button';
import StyledInput from '../StyledInput';

import { signup } from '../../Utils/API';
import { setLogin } from '../../Utils/Auth';

import './Login.scss';

function Login({ history: { push } }) {
  return (
    <section className="login">
      <Formik
        initialValues={{ email: '' }}

        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = 'E-mail é obrigatório';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Digite um e-mail válido';
          }

          return errors;
        }}

        onSubmit={async ({ email }) => {
          const { user } = await signup(email);

          setLogin(user.token);
          push('/feed/husky');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__input-container">
              <StyledInput
                autoComplete="off"
                className={`${(errors.email && touched.email) ? 'login__input--error ' : ''}login__input`}
                id="email"
                filled={!!values.email}
                error={(errors.email && touched.email)}
                name="email"
                onChange={handleChange}
                placeholder="Digite seu e-mail (ex.: your@email.com)"
                required
                type="email"
                value={values.email}
              />
              {errors.email && <small className="login__input-message login__input-message--error">{errors.email && touched.email && errors.email}</small>}
            </div>

            <Button
              big
              className={`login__button my-2${isSubmitting ? ' login__button--loading' : ''}`}
              disabled={isSubmitting}
              type="submit"
            >
              {
                isSubmitting ? (
                  <Spinner
                    className="login__button-loader"
                    color="#fff"
                    name="three-bounce"
                  />
                ) : (
                  <>
                    Entrar
                    <FaPaw className="login__button-icon" />
                  </>
                )
              }
            </Button>
          </form>
        )}
      </Formik>
    </section>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Login);
