import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { LoginScreen } from './Lazy';

const Router = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;