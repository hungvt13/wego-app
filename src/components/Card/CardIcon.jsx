import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { ICON_TYPES } from './constants';

function IconType({ type }) {
  switch (type) {
    case ICON_TYPES.GIFT:
      return <i className='fa fa-gift' />;
    case ICON_TYPES.FREE_ONE:
      return <span>1+1</span>;
    case ICON_TYPES.DISCOUNT:
      return <i className='fa fa-percent' />;
    default:
      return null;
  }
}

IconType.propTypes = {
  type: PropTypes.string,
};

function CardIcon({ type, children }) {
  return (
    <span
      className={clsx('card-icon', {
        'bg-blue': type === ICON_TYPES.GIFT,
        'bg-purple': type === ICON_TYPES.FREE_ONE,
        'bg-red': type === ICON_TYPES.DISCOUNT,
      })}
    >
      <IconType type={type} />
      {children}
    </span>
  );
}

CardIcon.propTypes = {
  type: PropTypes.string,
  children: PropTypes.func,
};

export default memo(CardIcon);