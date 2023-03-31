import clsx from 'clsx';
import PropTypes from 'prop-types';

import Card from '../Card';

import './card-list.css';

function CardList({ list, className, ...restProps }) {
  return (
    <div className={clsx('cards-container', className)} {...restProps}>
      {
        list && list.map((item, index) => (
          <div key={index} className='card-item'>
            <Card {...item} />
          </div>
        )) 
      }
    </div>
  );
}

CardList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    imgProps: PropTypes.object,
    tags: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
    })),
  })).isRequired,
  className: PropTypes.string,
};

export default CardList;