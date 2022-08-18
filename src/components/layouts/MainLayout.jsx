import React from 'react';
import { useLocation} from 'react-router-dom';
import LoadingScreen from './loadingScreen/LoadingScreen';
import Sidebar from './sideBar/Sidebar';
import styles from './styles.module.scss';

// import PropTypes from 'prop-types';

const noLayout = ['/login', '/error/tenant'];

const MainLayout = ({children}) => {
  const location = useLocation();

  const checkNoLayout = () => {
    if(noLayout.includes(location.pathname)){
      return true;
    }
  };

  return(
    <React.Suspense fallback={<LoadingScreen />}>
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