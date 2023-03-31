import { memo } from 'react';
import PropTypes from 'prop-types';

function CardImage({ img, ...restProps }) {
  return (
    <div className='card-image'>
      <img
        src={img} 
        {...restProps}
      />
    </div>
  );
}

CardImage.propTypes = {
  img: PropTypes.string.isRequired,
};


export default memo(CardImage);