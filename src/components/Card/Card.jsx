import { memo } from 'react';
import PropTypes from 'prop-types';

import './card.css';

import CardContent from './CardContent';
import CardImage from './CardImage';

function Card({ img, imgProps, tags }) {
  return (
    <div className='card-container'>
      <CardImage img={img} {...imgProps}/>
      <CardContent tags={tags} />
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  imgProps: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  })),
};

export default memo(Card);