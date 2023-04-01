import PropTypes from 'prop-types';

import './card-list-skeleton.css';

function Skeleton() {
  return (
    <div className='card-skeleton-item'>
      <div className='card-skeleton-image bg-loading' />

    </div>
  );
}

function CardListSkeleton({ noOfItem }) {
  return (
    <div className='cards-skeleton-container'>
      {
        [...Array(noOfItem)].map((item, index) => <Skeleton key={index} />)
      }
    </div>
  );
}

CardListSkeleton.propTypes = {
  noOfItem: PropTypes.number,
};

CardListSkeleton.defaultProps = {
  noOfItem: 9,
};


export default CardListSkeleton;