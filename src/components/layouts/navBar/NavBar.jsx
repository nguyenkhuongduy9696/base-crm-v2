import React, { useRef, useState } from 'react';
import {RiMenuUnfoldFill} from 'react-icons/ri';
import styles from './styles.module.scss';
import {useRecoilState, useRecoilValue} from 'recoil';
import {sidebarVisibleState} from 'recoil/atom/common';
import {SIDEBAR_VISIBLE_STATE, USER_LOGIN_BEFORE} from 'constants/localStorage';
import BasePopup from 'components/base/basePopup/BasePopup';
import {ImCog} from 'react-icons/im';
import {BiTask} from 'react-icons/bi';
import {IoIosSearch} from 'react-icons/io';
import {BsChevronDown} from 'react-icons/bs';
import useOnClickOutSide from 'hooks/useOnClickOutSide';
import { authenticatedUserState } from 'recoil/atom/auth';
import UserPicture from 'assets/images/user.png';
import { ACCESS_TOKEN, removeCookie } from 'helpers/cookie';
import { useNavigate } from 'react-router-dom';
import Tooltip from 'components/base/tooltip/Tooltip';

const accountButtonStyles = 'w-8 h-8 flex items-center justify-center' + 
' rounded-full cursor-pointer';
const settingButtonStyles = 'w-8 h-8 flex items-center justify-center bg-primary hover:bg-primary-strong text-16 rounded-full text-white cursor-pointer';

const NavBar = ({children}) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisibleState);

  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const data = useRecoilValue(authenticatedUserState);

  const handleExpandSidebar = () => {
    setIsVisible(value => !value);
    localStorage.setItem(SIDEBAR_VISIBLE_STATE, isVisible ? 0 : 1);
  };

  const handleClickInput = () => {
    setFocused(true);
  };           
  
  useOnClickOutSide(inputRef, () => setFocused(false));

  const handleLogout = () => {
    removeCookie(ACCESS_TOKEN);
    localStorage.setItem(USER_LOGIN_BEFORE, 0);
    navigate('/login', {replace: true});
  };

  return(
    <>
      <div className={styles.container}>
        <div className="flex">
          <div className="flex">
            <div className={ `${styles.collapseButton} ${isVisible ? 'hidden' : 'flex mr-3'}`} 
              onClick={handleExpandSidebar}>
              <RiMenuUnfoldFill />
            </div>
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
            <div className={settingButtonStyles} data-tip='Thiết lập' data-for='icon_setting'>
              <ImCog />
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
            <div>
              <img className={accountButtonStyles} src={data ? `${data.picture}?w=50&h=50` || UserPicture : UserPicture} alt="" />
            </div>
            <ul className='dropdown-ul'>
              <li>Thông tin tài khoản</li>
              <li>Đổi mật khẩu</li>
              <li>Thiết lập</li>
              <div className="separator"></div>
              <li onClick={handleLogout}>Đăng xuất</li>
            </ul>
          </BasePopup>
        </div>
      </div>
      <Tooltip id='icon_setting' />
    </>
  );
};

export default React.memo(NavBar);