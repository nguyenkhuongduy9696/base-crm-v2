import React, { Children, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutSide from 'hooks/useOnClickOutSide';
import styles from './styles.module.scss';

const BasePopup = React.memo(({
  children,
  position = 'right',
  dropdownClassName = '',
} ) => {
  const child = Children.toArray(children);
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useOnClickOutSide(ref, () => setShow(false));

  return (
    <div className={ `${dropdownClassName} ${styles.dropdown}` } ref={ ref }>
      <div onClick={ () => setShow(!show) }>
        { child[0] }
      </div>
      <div className="relative">
        { show
          ? <div className={ `${styles.dropdownContainer} ${position === 'right' ? `${styles.right}` : `${styles.left}`}` }>
            { child[1] }
          </div>
          : null }
      </div>
    </div>
  );
});

BasePopup.displayName = 'Base popup';

BasePopup.propTypes = {
  position: PropTypes.string,
  dropdownClassName: PropTypes.string
};

export default BasePopup;