import { memo } from 'react';
import PropTypes from 'prop-types';

import Tag from '../Tag/Tag';

function CardContent({ title, tags }) {
  return (
    <div className='card-content'>
      <h2 className='card-title'>
        {title}
      </h2>
      <div className='card-tags'>
        {
          tags && tags.map((tagProps, index) => <Tag key={index} {...tagProps} />)
        }
        <Tag />
      </div>
    </div>
  );
}

CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  })),
};

export default memo(CardContent);