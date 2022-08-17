import React from 'react';
import PropTypes from 'prop-types';
import {BiPlus} from 'react-icons/bi';
import {BsShieldPlus} from 'react-icons/bs';

const BaseButton = () => {
  return(
    <>
      <button className='btn btn-primary'>
        <span className='mr-1 text-16'>
          <BsShieldPlus />
        </span>
        <p>Thêm mới</p>
        <span className='ml-1 text-16'>
          <BiPlus />
        </span>
      </button>
    </>
  );
};

BaseButton.propTypes = {
  title: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object
};

export default React.memo(BaseButton);