import { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './button.css';

function Button({ children, className, active, ...restProps }) {
  return (
    <button 
      className={clsx('button', { active: active }, className)} {...restProps}
    >
        {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  active: PropTypes.bool
};

Button.defaultProps = {
  active: false,
};

export default memo(Button);