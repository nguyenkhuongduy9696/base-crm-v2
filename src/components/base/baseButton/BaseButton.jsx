import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../tooltip/Tooltip';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

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
  iconRightClassName = 'ml-1 text-16',
  enable = true,
  type = 'button'
}) => {
  const isMutation = useIsMutating();
  const isFetching = useIsFetching();

  return(
    <>
      <button className={ `btn ${ enable ? type === 'submit' ? isMutation && isFetching ? `${className}` : 'btn-gray disabled' : `${className}` : 'btn-gray disabled' } `}
        data-tip={tooltip ? tooltip : ''} 
        data-for={tooltipId}
        onClick={ enable ? type === 'submit' ? isMutation && isFetching ? onClick : null : onClick : null}>
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
  iconRightClassName: PropTypes.string,
  enable: PropTypes.bool,
  type: PropTypes.string
};

export default React.memo(BaseButton);