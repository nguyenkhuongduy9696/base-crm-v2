import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';

const BaseInput = React.forwardRef(({
  label,
  type = 'text',
  placeholder = '',
  autoFocus = false,
}, ref) => {
  const [inputType, setInputType] = useState(type);

  const handleChangeInputType = () => {
    setInputType(value => value === 'text' ? 'password' : 'text');
  };
  
  return(
    <div className={styles.container}>
      { label && <div className={styles.label}>{label}</div> }
      <div className={ `${styles.inputContainer}` }>
        <input 
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`${styles.input } ${type === 'password' ? `${styles.iconRight}` : ''}`}
        />
        {
          type === 'password' && 
          <div className={styles.rightIconContainer}
            onClick={ handleChangeInputType }>
            <div className={styles.rightIcon}>
              {
                inputType === 'password' ? <AiOutlineEye className={styles.icon} /> : <AiOutlineEyeInvisible className={styles.icon} />
              }         
            </div>
          </div>
        }
      </div> 
    </div>
  );
});

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
};

BaseInput.displayName = 'Base Input';

export default BaseInput;