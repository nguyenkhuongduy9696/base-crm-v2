import React from 'react';
import styles from './styles.module.scss';
import {useRecoilState} from 'recoil';
import {sidebarVisibleState} from 'recoil/atom/common';
import {SIDEBAR_VISIBLE_STATE} from 'constants/localStorage';
import {RiMenuUnfoldFill} from 'react-icons/ri';
import { Skeleton } from '@progress/kendo-react-indicators';

const GridLoading = () => {
  const [isVisible, setIsVisible] = useRecoilState(sidebarVisibleState);

    
  const handleExpandSidebar = () => {
    setIsVisible(value => !value);
    localStorage.setItem(SIDEBAR_VISIBLE_STATE, isVisible ? 0 : 1);
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className={styles.navContainer}>
          <div className="flex">
            <div className="flex">
              <div className={ `${styles.collapseButton} ${isVisible ? 'hidden' : 'flex mr-3'}`} 
                onClick={handleExpandSidebar}>
                <RiMenuUnfoldFill />
              </div>
            </div>
            <Skeleton
              shape={'circle'}
              style={{
                width: 45,
                height: 45,
                marginRight: 16,
              }}
            />
            <Skeleton
              shape={'text'}
              style={{
                width: '150px',
                height: '40px'
              }}
            />
          </div>
          <div className="flex items-center global-action">
            <Skeleton
              shape={'text'}
              style={{
                width: '200px',
                height: '40px'
              }}
            />
            <Skeleton
              shape={'circle'}
              style={{
                width: 35,
                height: 35,
                marginLeft: 16,
              }}
            />
            <Skeleton
              shape={'circle'}
              style={{
                width: 35,
                height: 35,
                marginLeft: 16,
              }}
            />
          </div>
        </div>
        <div className={styles.mainContainer}>
            
        </div>
      </div>
    </>
  );
};

export default GridLoading;