import React from 'react';
import {RiMenuUnfoldFill} from 'react-icons/ri';
import styles from './styles.module.scss';
import Tooltip from 'components/base/tooltip/Tooltip';
import {useRecoilState} from 'recoil';
import {sidebarVisibleState} from '../../../recoil/atom/common';
import {SIDEBAR_VISIBLE_STATE} from 'constants/localStorage';

const NavBar = () => {
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisibleState);

  const handleExpandSidebar = () => {
    setIsVisible(value => !value);
    localStorage.setItem(SIDEBAR_VISIBLE_STATE, isVisible ? 0 : 1);
  };

  return(
    <>
      {
        !isVisible &&
      <>
        <div className={styles.navbarButton} data-tip='Mở Sidebar' data-for='navbar-tooltip-expand' data-delay-show='600'
          onClick={handleExpandSidebar}>
          <RiMenuUnfoldFill />
        </div>
        <Tooltip id='navbar-tooltip-expand' type='success' place='right' delayShow={600} />
      </>
      } 
    </>
  );
};

export default React.memo(NavBar);