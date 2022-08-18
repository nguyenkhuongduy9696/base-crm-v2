import GridLoading from 'components/components/loading/contentLoading/GridLoading';
import React from 'react';
import { useLocation} from 'react-router-dom';
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
    checkNoLayout() ? <>{children}</> : 
      <>
        <div className="w-full flex">
          <Sidebar />
          <div className={styles.mainContainer}>
            <React.Suspense fallback={<GridLoading />}>
              {children}
            </React.Suspense>
          </div>
        </div>
      </>
  );
};

MainLayout.propTypes = {

};

export default MainLayout;