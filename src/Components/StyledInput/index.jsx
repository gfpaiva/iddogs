import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './StyledInput.scss';

export default function StyledInput({
  id,
  className,
  filled,
  error,
  ...props
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) setActive(filled);
  }, [filled]);

  return (
    <label className={`styled-input${active ? ' styled-input--active' : ''}${error ? ' styled-input--error' : ''}`} htmlFor={id}>
      <input
        {...props}
        id={id}
        className={`text-center${className ? ` ${className}` : ''}`}
        onFocus={() => setActive(true)}
        onBlur={() => !filled && setActive(false)}
      />
    </label>
  );
}

StyledInput.defaultProps = {
  className: '',
  error: false,
  filled: false,
};

StyledInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  filled: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
