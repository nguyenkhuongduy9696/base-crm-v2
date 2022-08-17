import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import _ from 'lodash';

const BaseInput = React.forwardRef(({
  label,
  type = 'text',
  placeholder = '',
  autoFocus = false,
  errors = {},
  validateErrors = [],
  validateName,
  iconLeft,
  iconRight,
  ...props
}, ref) => {
  const [inputType, setInputType] = useState(type);

  const handleChangeInputType = () => {
    setInputType(value => value === 'text' ? 'password' : 'text');
  };

  const checkError = !_.isEmpty(errors) ? errors[validateName] ? true : false : false;

  return(
    <div className={styles.container}>
      { label && <div className={styles.label}>{label}</div> }
      <div className={ `${styles.inputContainer}` }>
        {
          iconLeft &&
          <div className={styles.leftIconContainer}>
            <div className={styles.leftIcon}>
              {iconLeft}      
            </div>
          </div>
        }
        <input 
          {...props}
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`${styles.input } ${checkError ? `${styles.error}` : ''} ${type === 'password' || iconRight ? `${styles.iconRight}` : ''} ${iconLeft ? `${styles.iconLeft}` : ''}`}
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
        {
          iconRight &&
          <div className={styles.rightIconContainer}>
            <div className={styles.rightIcon}>
              {iconRight}       
            </div>
          </div>
        }
      </div> 
      {
        !_.isEmpty(errors) && errors[validateName] && validateErrors.length > 0 && validateErrors.findIndex(item => item.type === errors[validateName].type) !== -1 &&
        <p className={styles.errorText}>{validateErrors[validateErrors.findIndex(item => item.type === errors[validateName].type)].errorText}</p>
      }
    </div>
  );
});

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  errors: PropTypes.object,
  validateErrors: PropTypes.array,
  validateName: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object
};

BaseInput.displayName = 'Base Input';

export default BaseInput;