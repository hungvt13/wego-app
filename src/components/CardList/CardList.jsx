import clsx from 'clsx';
import PropTypes from 'prop-types';

import Card from '../Card';
import CardListSkeleton from '../SkeletonLoading/CardListSkeleton';

import './card-list.css';

function CardList({ list, className, isLoading, dataTestId, ...restProps }) {

  if (isLoading) {
    return <CardListSkeleton />;
  }

  return (
    <div 
      className={clsx('cards-container', className)}
      data-testid={dataTestId}
      {...restProps}
    >
      {
        list && list.map(({ id, ...restItemProps }, index) => (
          <div key={id ?? index} className='card-item' >
            <Card dataTestId={`${dataTestId}-item`} {...restItemProps} />
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
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    })),
  })).isRequired,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  isLoading: PropTypes.bool,
};

CardList.defaultProps = {
  isLoading: false,
};

export default CardList;