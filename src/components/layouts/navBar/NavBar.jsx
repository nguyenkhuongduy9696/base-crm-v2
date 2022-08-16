import React from 'react';
import {RiMenuUnfoldFill} from 'react-icons/ri';
import styles from './styles.module.scss';
import Tooltip from 'components/base/tooltip/Tooltip';
import {useRecoilState} from 'recoil';
import {sidebarVisibleState} from 'recoil/atom/common';
import {SIDEBAR_VISIBLE_STATE} from 'constants/localStorage';
import BasePopup from 'components/base/basePopup/BasePopup';
import {BsPlusLg} from 'react-icons/bs';

const NavBar = ({children}) => {
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisibleState);

  const handleExpandSidebar = () => {
    setIsVisible(value => !value);
    localStorage.setItem(SIDEBAR_VISIBLE_STATE, isVisible ? 0 : 1);
  };

  const accountButtonStyles = 'w-8 h-8 flex items-center justify-center bg-primary hover:bg-primary-strong' + 
                              ' text-12 rounded-full text-white cursor-pointer';
  const plusButtonStyles = 'w-8 h-8 flex items-center justify-center bg-primary hover:bg-primary-strong' + 
                              ' text-12 rounded-full text-white cursor-pointer';
  return(
    <>
      <div className={styles.container}>
        <div className="flex">
          <div className={ `${styles.collapseButton} ${isVisible ? 'hidden' : 'flex mr-3'}`} data-tip='Mở Sidebar' data-for='navbar-tooltip-expand' data-delay-show='600'
            onClick={handleExpandSidebar}>
            <RiMenuUnfoldFill />
          </div>
          <Tooltip id='navbar-tooltip-expand' type='success' place='right' delayShow={600} />
          { children }
        </div>
        <div className="flex">
          <BasePopup>
            <div className={plusButtonStyles}>
              <BsPlusLg />
            </div>
            <ul className='dropdown-ul'>
              <li>Thêm mới công việc</li>
              <li>Đổi mật khẩu</li>
              <li>Thiết lập</li>
              <div className="separator"></div>
              <li>Đăng xuất</li>
            </ul>
          </BasePopup>
          <BasePopup dropdownClassName='ml-3'>
            <div className={accountButtonStyles}>Du</div>
            <ul className='dropdown-ul'>
              <li>Thông tin tài khoản</li>
              <li>Đổi mật khẩu</li>
              <li>Thiết lập</li>
              <div className="separator"></div>
              <li>Đăng xuất</li>
            </ul>
          </BasePopup>
        </div>
      </div>
    </>
  );
};

export default React.memo(NavBar);