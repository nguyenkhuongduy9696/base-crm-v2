import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import {FiChevronRight} from 'react-icons/fi';

const SidebarMenuItem = ({item}) => {
  const location = useLocation();
  console.log(location);

  return(
    <li className={ `${styles.menuItem} ${location.pathname === item.path ? styles.selected : ''}`}>
      <div className="flex items-center justify-between">
        <NavLink to={item.subMenu.length === 0 ? item.path : '#'}>
          {item.title}
        </NavLink>
        {
          item.subMenu.length > 0 &&
            <span className='text-17'>
              <FiChevronRight />
            </span>
        }
      </div>
      
    </li>
  );
};

SidebarMenuItem.propTypes = {
  item: PropTypes.object
};

export default React.memo(SidebarMenuItem);