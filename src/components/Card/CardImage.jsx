import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function CardImage({ img, ...restProps }) {

  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={
      clsx(
        'card-image',
        { 'bg-loading': isLoading }
      )
    }>
      <img
        src={img}
        onLoad={handleOnLoad}
        {...restProps}
      />
    </div>
  );
}

CardImage.propTypes = {
  img: PropTypes.string.isRequired,
};


export default memo(CardImage);