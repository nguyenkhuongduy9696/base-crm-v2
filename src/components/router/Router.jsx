import MainLayout from 'components/layouts/MainLayout';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { DashboardScreen, LoginScreen } from './Lazy';

const Router = () => {

  const getCommonElement = (element) => {
    return(
      <MainLayout>
        {element}
      </MainLayout>
    );
  };

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />

          <Route path='/' element={ getCommonElement(<DashboardScreen />) } />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;