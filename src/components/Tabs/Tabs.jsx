import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './tabs.css';

function Tabs({ list, onClick }) {
  const [active, setActive] = useState(0);

  const handleClick = (e, tabIndex) => {
    e.preventDefault();

    setActive(tabIndex);
    onClick && onClick();
  };

  return (
    <div className='tab-container'>
      {
        list.length !== 0 && list.map((tab, index) => (
          <Button 
            key={index}
            className='tab'
            active={index === active}
            onClick={(e) => handleClick(e, index)}
          >{tab}
        </Button>
        ))
      }
    </div>
  );
}

Tabs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

Tabs.defaultProps = {
  onClick: () => {},
};

export default Tabs;