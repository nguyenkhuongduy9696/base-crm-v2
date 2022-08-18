import MainLayout from 'components/layouts/MainLayout';
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { DashboardScreen, Error404Screen, ErrorTenantScreen, LoginScreen } from './Lazy';
import ErrorPermission from 'components/auth/ErrorPermission';

const Router = () => {

  const checkPermission = (component, permission) => {
    return permission ? component : <ErrorPermission />;
  };

  return(
    <>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/error/tenant" element={<ErrorTenantScreen />} />

          <Route path='/' element={ checkPermission(<DashboardScreen />, true)  } />

          <Route path="*" element={<Error404Screen />} />
        </Routes>
      </MainLayout>

    </>
  );
};

export default Router;