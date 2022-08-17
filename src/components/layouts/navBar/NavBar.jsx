import React, { useRef, useState } from 'react';
import {RiMenuUnfoldFill} from 'react-icons/ri';
import styles from './styles.module.scss';
import Tooltip from 'components/base/tooltip/Tooltip';
import {useRecoilState} from 'recoil';
import {sidebarVisibleState} from 'recoil/atom/common';
import {SIDEBAR_VISIBLE_STATE} from 'constants/localStorage';
import BasePopup from 'components/base/basePopup/BasePopup';
import {BsPlusLg} from 'react-icons/bs';
import {BiTask} from 'react-icons/bi';
import {IoIosSearch} from 'react-icons/io';
import {BsChevronDown} from 'react-icons/bs';
import useOnClickOutSide from 'hooks/useOnClickOutSide';

const NavBar = ({children}) => {
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisibleState);

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const handleExpandSidebar = () => {
    setIsVisible(value => !value);
    localStorage.setItem(SIDEBAR_VISIBLE_STATE, isVisible ? 0 : 1);
  };

  const accountButtonStyles = 'w-8 h-8 flex items-center justify-center bg-primary hover:bg-primary-strong' + 
                              ' text-12 rounded-full text-white cursor-pointer';
  const plusButtonStyles = 'w-8 h-8 flex items-center justify-center bg-primary hover:bg-primary-strong' + 
                              ' text-12 rounded-full text-white cursor-pointer';

  const handleClickInput = () => {
    setFocused(true);
  };           
  
  useOnClickOutSide(inputRef, () => setFocused(false));

  return(
    <>
      <div className={styles.container}>
        <div className="flex">
          <div className="flex">
            <div className={ `${styles.collapseButton} ${isVisible ? 'hidden' : 'flex mr-3'}`} data-tip='Mở Sidebar' data-for='navbar-tooltip-expand'
              onClick={handleExpandSidebar}>
              <RiMenuUnfoldFill />
            </div>
            <Tooltip id='navbar-tooltip-expand' type='success' place='right' />
          </div>
          { children }
        </div>
        <div className="flex items-center global-action">
          <div className="search-bar" onClick={handleClickInput} ref={inputRef}>
            <span className='icon-left'>
              <IoIosSearch />
            </span>
            <input type="text" className={ `input ${focused ? 'focus' : ''}` } placeholder='Tìm kiếm...' />
            <span  className='icon-right hover:text-primary'>
              <BsChevronDown />
            </span>
            <div className={ `search-popup px-4 py-2 ${focused ? '' : 'hidden'}` }>
              Tìm kiếm
            </div>
          </div>
          <BasePopup dropdownClassName='ml-3'>
            <div className={plusButtonStyles}>
              <BsPlusLg />
            </div>
            <ul className='dropdown-ul'>
              <li>
                <span className='dropdown-icon'><BiTask /></span>
                Công việc
              </li>
              <li>
                <span className='dropdown-icon'><BiTask /></span>
                Cơ hội
              </li>
              <li>
                <span className='dropdown-icon'><BiTask /></span>
                Chiến dịch
              </li>
              <li>
                <span className='dropdown-icon'><BiTask /></span>
                Tin nhắn
              </li>
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