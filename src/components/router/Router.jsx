import MainLayout from 'components/layouts/MainLayout';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { DashboardScreen, LoginScreen } from './Lazy';

const Router = () => {

  return(
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />

            <Route path='/' element={ <DashboardScreen /> } />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default Router;