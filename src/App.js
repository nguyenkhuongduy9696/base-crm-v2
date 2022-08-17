import { useQuery } from '@tanstack/react-query';
import { authApi } from 'api/auth';
import { getTenant } from 'helpers/common';
import React, { useEffect } from 'react';

import { RecoilRoot } from 'recoil';
import Router from './components/router/Router';
import {CHECK_TENANT_KEY} from './constants/queryKeys/auth';
import { toast } from 'react-toastify';
import LoadingScreen from 'components/layouts/loadingScreen/LoadingScreen';

const App = () => {
  const tenant = getTenant();
  const {checkTenant} = authApi();

  const {data, isLoading} = useQuery(
    [CHECK_TENANT_KEY, tenant],
    () => checkTenant(tenant),
    {suspense: false}
  );

  useEffect(() => {
    if(data && data.meta.status_code !== 0){
      toast.error(data.meta.message);
    }
  },[data]);

  if(!isLoading){
    return <LoadingScreen />;
  }

  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>  
  );
};

export default App;
