import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../tooltip/Tooltip';

const BaseButton = ({
  title = '',
  iconLeft,
  iconRight,
  tooltip,
  tooltipId,
  tooltipType = 'success',
  onClick,
  className = '',
  titleClassName = '',
  iconLeftClassName = 'mr-1 text-16',
  iconRightClassName = 'ml-1 text-16'
}) => {
  return(
    <>
      <button className={ `btn ${className} `} data-tip={tooltip ? tooltip : ''} data-for={tooltipId}
        onClick={onClick}>
        <span className={iconLeftClassName}>
          {iconLeft}
        </span>
        { title && <p className={titleClassName}>{title}</p> }
        <span className={iconRightClassName}>
          {iconRight}
        </span>
      </button>
      { tooltip && <Tooltip id={tooltipId} type={tooltipType} /> }
    </>
  );
};

BaseButton.propTypes = {
  title: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  tooltip: PropTypes.string,
  tooltipId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  tooltipType: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  iconLeftClassName: PropTypes.string,
  iconRightClassName: PropTypes.string
};

export default React.memo(BaseButton);