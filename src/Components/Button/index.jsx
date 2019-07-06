import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({
  big, className, children, ...rest
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`${big ? 'button--big ' : ''}${className ? `${className} ` : ''}button bg-primary color-secondary`}
      {...rest}
    >
      <span className="button__content">
        {children}
      </span>
    </button>
  );
}

Button.defaultProps = {
  big: false,
  className: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  big: PropTypes.bool,
  className: PropTypes.string,
};
