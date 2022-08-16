import React from 'react';
import NavBar from './navBar/NavBar';
import Sidebar from './sideBar/Sidebar';
import styles from './styles.module.scss';
// import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
  return(
    <>
      <div className="w-full flex">
        <Sidebar />
        <div className={styles.mainContainer}>
          <NavBar />
          {children}
        </div>
      </div>
    </>
  );
};

MainLayout.propTypes = {

};

export default MainLayout;