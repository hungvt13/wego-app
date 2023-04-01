import { memo } from 'react';
import PropTypes from 'prop-types';

import './card.css';

import CardContent from './CardContent';
import CardImage from './CardImage';
import CardIcon from './CardIcon';

function Card({ img, title, iconType, imgProps, tags }) {
  return (
    <div className='card-container'>
      <CardIcon type={iconType} />
      <CardImage img={img} {...imgProps}/>
      <CardContent title={title} tags={tags} />
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  imgProps: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  })),
};

export default memo(Card);