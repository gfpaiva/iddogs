import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';
import LazyImage from '../LazyImage';

export default function Grid({ items }) {
  return (
    <div className="grid">
      {items.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <LazyImage key={idx} id={idx} image={item} />
      ))}
    </div>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
