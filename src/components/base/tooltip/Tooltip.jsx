import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const Tooltip = ({id, type, place = 'bottom', ...props}) => {

  const getBackgroundColor = (type) => {
    switch (type) {
    case 'success':
      return '#0bc98d';
    default:
      return '#000';
    }
  };

  return(
    <>
      <ReactTooltip
        id={id ? id : ''}
        type={type}
        backgroundColor={getBackgroundColor(type)}
        place={place}
        {...props}
      />
    </>
  );
};

Tooltip.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  place: PropTypes.string,
};

export default Tooltip;