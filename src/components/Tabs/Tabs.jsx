import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './tabs.css';

function Tabs({ list, onClick, dataTestId }) {
  const [active, setActive] = useState(0);
  const populatedList = [{ id: '', name: 'All'}, ...list];

  const handleClick = (e, tabIndex, id) => {
    e.preventDefault();

    setActive(tabIndex);
    onClick && onClick(id);
  };

  return (
    <div className='tab-container'>
      {
        populatedList.length !== 0 && populatedList.map(({ id, name }, index) => (
          <Button 
            key={id ?? index}
            className='tab'
            active={index === active}
            onClick={(e) => handleClick(e, index, id)}
            data-testid={`${dataTestId}`}
          >{name}
        </Button>
        ))
      }
    </div>
  );
}

Tabs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  onClick: PropTypes.func,
  dataTestId: PropTypes.string
};

Tabs.defaultProps = {
  onClick: () => {},
  dataTestId: 'Tabs'
};

export default Tabs;