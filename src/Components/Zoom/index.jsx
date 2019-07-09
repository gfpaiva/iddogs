/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Zoom.scss';

const getCategoryURL = (URL) => {
  const urlToArray = URL.split('/');

  urlToArray.pop();

  return urlToArray.join('/');
};

function Zoom({
  image,
  id,
  setZoom,
  history: { push },
  location: { pathname },
}) {
  const exitZoom = () => {
    setZoom(false);
    push(getCategoryURL(pathname));
  };

  const keyPressHandler = (e) => {
    e.preventDefault();

    if (e.key === 'Escape') exitZoom();
  };

  useEffect(() => {
    document.addEventListener('keyup', keyPressHandler);

    return () => {
      document.removeEventListener('keyup', keyPressHandler);
    };
  }, []);

  return (
    <>
      <div className="zoom text-center">
        <img className="full-width animated zoomIn faster" src={image} alt={id} title={id} />
      </div>
      <div
        className="zoom__mask animated fadeIn faster"
        onClick={exitZoom}
      />
    </>
  );
}


Zoom.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setZoom: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Zoom);
