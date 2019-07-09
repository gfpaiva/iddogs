/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './LazyImage.scss';
import Zoom from '../Zoom';

function LazyImage({
  image,
  id,
  history: { push },
  location: { pathname },
  match: { params },
}) {
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const intId = parseInt(params.id, 10);

    if (params.id && intId === id) setZoom(true);
  }, []);

  return (
    <div className="lazy-image">
      <VisibilitySensor
        onChange={isVisible => isVisible && setVisible(true)}
        partialVisibility
        offset={{ top: 100 }}
      >
        <CSSTransition
          in={visible}
          timeout={800}
          classNames={{
            enter: 'animated fast',
            enterActive: 'fadeIn fast',
            enterDone: 'animated fadeIn fast',
          }}
        >
          <div
            className="lazy-image__image"
            onClick={() => {
              setZoom(true);
              push(`${pathname}/${id}`);
            }}
            style={{
              ...(visible) && { backgroundImage: `url(${image})` },
            }}
          />
        </CSSTransition>
      </VisibilitySensor>

      {zoom && (
        <Zoom id={id} image={image} setZoom={setZoom} />
      )}
    </div>
  );
}

LazyImage.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(LazyImage);
