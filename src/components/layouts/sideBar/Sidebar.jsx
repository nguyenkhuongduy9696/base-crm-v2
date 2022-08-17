import React, { useEffect } from 'react';
import styles from './styles.module.scss';
// import Logo from 'assets/images/logo/logo-white.png';
import {RiMenuFoldLine} from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import {sidebarVisibleState} from '../../../recoil/atom/common';
import {SIDEBAR_VISIBLE_STATE} from 'constants/localStorage';
import { NavLink } from 'react-router-dom';
import { SidebarMenu } from 'components/router/Menu';
import SidebarMenuItem from './SidebarMenuItem';

const SideBar = () => {
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisibleState);

  const handleCollapseSidebar = () => { 
    setIsVisible(value => !value);
    localStorage.setItem(SIDEBAR_VISIBLE_STATE, isVisible ? 0 : 1);
  };

  useEffect(() => {
    const visible = localStorage.getItem(SIDEBAR_VISIBLE_STATE);
    setIsVisible(visible === null ? true : visible === '1');
  },[]);
  
  return (
    <>
      <div className={ `${styles.container} ${isVisible ? '' : 'sidebar-collapsed'}`}>
        <div className="w-full flex items-center justify-between py-5 px-4 mb-4">
          <NavLink to='/'>
            {/* <img src={Logo} alt="logo" className='w-32 h-7' /> */}
            <p className='text-2xl pl-2'>
              <span className='text-primary font-bold'>Next</span><span>CRM</span>
            </p>   
          </NavLink>
          <div className='w-7 h-7 flex items-center justify-center text-xl cursor-pointer hover:bg-dark rounded-sm'
            onClick={handleCollapseSidebar}>
            <RiMenuFoldLine />
          </div> 
        </div>
        <ul className=''>
          {
            SidebarMenu.map(item => {
              return(
                <SidebarMenuItem key={item.id} item={item} />
              );
            })
          }
        </ul>
      </div>
    </>
  );
};

export default React.memo(SideBar);