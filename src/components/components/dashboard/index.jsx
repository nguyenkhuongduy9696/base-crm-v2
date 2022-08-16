import NavBar from 'components/layouts/navBar/NavBar';
import React from 'react';
import Actions from './Actions';

const Dashboard = () => {
  return(
    <>
      <NavBar>
        <Actions />
      </NavBar>
    </>
  );
};

export default Dashboard;