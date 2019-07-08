import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import './LazyImage.scss';

export default function LazyImage({ image }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="lazy-image">
      <VisibilitySensor
        onChange={isVisible => isVisible && setVisible(true)}
      >
        <div
          className="lazy-image__image"
          style={{
            ...(visible) && { backgroundImage: `url(${image})` },
          }}
        />
      </VisibilitySensor>
    </div>
  );
}

LazyImage.propTypes = {
  image: PropTypes.string.isRequired,
};
