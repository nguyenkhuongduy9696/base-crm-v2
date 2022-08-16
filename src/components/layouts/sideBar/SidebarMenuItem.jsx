import React, { useState } from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import {FiChevronRight, FiChevronDown} from 'react-icons/fi';

const SidebarMenuItem = ({item}) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const checkCurrentPath = () => {
    let checked = false;
    if(item.path === location.pathname){
      checked = true;
    }
    item.subMenu.forEach(i => {
      if(i.subPath === location.pathname){
        checked = true;
      }
    });
    return checked;
  };

  const handleExpand = () => {
    setExpanded(value => !value);
  };

  return(
    <li>
      {
        item.subMenu.length === 0 ?
          <NavLink to={item.subMenu.length === 0 ? item.path : '#'}>
            <div className={ `flex items-center justify-between ${styles.menuItem} ${ checkCurrentPath() ? styles.selected : ''}` }>
              <div className='flex items-center'>
                <span className='text-17 mr-2'>{item.icon}</span>
                {item.title}
              </div>
            </div>
          </NavLink> :
          <div className={ `flex items-center justify-between ${styles.menuItem} ${ checkCurrentPath() ? styles.selected : ''}` }
            onClick={handleExpand}>
            <div className='flex items-center'>
              <span className='text-17 mr-2'>{item.icon}</span>
              {item.title}
            </div>
            <div className='text-17 w-6 h-6 rounded-md flex items-center justify-center hover:bg-dark' >
              { expanded ? <FiChevronDown /> : <FiChevronRight /> }
            </div>
          </div>
      }
      {
        item.subMenu.length > 0 &&
        <ul className={ `${styles.subMenuUl} ${expanded ? `${styles.expanded}` : ''}` }>
          {
            item.subMenu.map(i => {
              return(
                <li key={i.id} className={ `${styles.subMenuItem} ${location.pathname === i.subPath ? `${styles.selected}` : ''}` }>
                  <NavLink to={i.subPath}>
                    <div className='flex items-center'>
                      <span className='text-17 mr-2'>{i.subIcon}</span>
                      {i.subTitle}
                    </div>
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      }    
    </li>
  );
};

SidebarMenuItem.propTypes = {
  item: PropTypes.object
};

export default React.memo(SidebarMenuItem);