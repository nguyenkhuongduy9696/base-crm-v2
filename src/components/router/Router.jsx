import MainLayout from 'components/layouts/MainLayout';
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { DashboardScreen, Error404Screen, ErrorTenantScreen, LoginScreen } from './Lazy';
import ErrorPermission from 'components/auth/ErrorPermission';
import LoginPage from 'components/auth/login/LoginPage';
import ErrorTenant from 'components/auth/ErrorTenant';

const Router = () => {

  const checkPermission = (component, permission) => {
    return permission ? component : <ErrorPermission />;
  };

  return(
    <>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error/tenant" element={<ErrorTenant />} />

          <Route path='/' element={ checkPermission(<DashboardScreen />, true)  } />

          <Route path="*" element={<Error404Screen />} />
        </Routes>
      </MainLayout>

    </>
  );
};

export default Router;