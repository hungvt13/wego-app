import { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './tag.css';

const TAG_TYPES = {
  RATING: 'rating',
  NEW: 'new',
  TIME: 'time',
};

function TagGenerator ({ type, content, ...restProps }) {
  switch (type) {
    case TAG_TYPES.RATING:
      return (
        <span {...restProps}>
          <i className="fa fa-star" />
          <span>{content}</span>
        </span>
      );  
    case TAG_TYPES.TIME:
      return <span {...restProps}>{content} min</span>;  
    case TAG_TYPES.NEW:
      return <span {...restProps}>New</span>;
    default:
      return null;
  }
}

TagGenerator.propTypes = {
  type: PropTypes.oneOfType([Object.values(TAG_TYPES)]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  className: PropTypes.string,
};

function Tag({ type, content, className, ...restProps }) {
  return (
    <TagGenerator
      className={clsx(
        'tag',
        className,
        { 
          'tag-rating': type === TAG_TYPES.RATING,
          'tag-new': type === TAG_TYPES.NEW
        }
      )}
      type={type}
      content={content}
      {...restProps}
    />
  );
}

Tag.propTypes = {
  type: PropTypes.oneOfType([Object.values(TAG_TYPES)]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  className: PropTypes.string,
};

export default memo(Tag);