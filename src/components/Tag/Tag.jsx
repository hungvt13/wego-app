import { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import './tag.css';

import { TAG_TYPES } from './constants';

// eslint-disable-next-line react/prop-types
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
  type: PropTypes.oneOf(Object.values(TAG_TYPES)),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]),
  className: PropTypes.string,
};

Tag.defaultProps = {
  content: 'a',
};

export default memo(Tag);