import PropTypes from 'prop-types';

import './input.css';

function Input({ icon, ...restProps}) {
  return (
    <div className='input-container'>
      <i className={icon} />
      <input type='text' className='user-input' {...restProps} />
    </div>
  );
}

Input.propTypes = {
  icon: PropTypes.string
};

Input.defaultProps = {
  icon: 'fa fa-search icon'
};

export default Input;