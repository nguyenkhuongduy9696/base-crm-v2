import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './sideBar/Sidebar';
import styles from './styles.module.scss';
// import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
  const location = useLocation();
  const noLayout = ['/login'];

  const checkNoLayout = () => {
    if(noLayout.includes(location.pathname)){
      return true;
    }
  };

  return(
    <React.Suspense fallback={<>...</>}>
      {
        checkNoLayout() ? <>{children}</> : 
          <>
            <div className="w-full flex">
              <Sidebar />
              <div className={styles.mainContainer}>
                {children}
              </div>
            </div>
          </>
      }
    </React.Suspense>
  );
};

MainLayout.propTypes = {

};

export default MainLayout;