import { useQuery } from '@tanstack/react-query';
import { authApis } from 'api/auth';
import { getTenant } from 'helpers/common';
import React, { useEffect } from 'react';

import Router from './components/router/Router';
import {CHECK_TENANT_KEY, AUTH_USER_INFO_KEY} from './constants/queryKeys/auth';
import LoadingScreen from 'components/layouts/loadingScreen/LoadingScreen';
import { useNavigate } from 'react-router-dom';
import {ACCESS_TOKEN, getCookie} from './helpers/cookie';
import { useSetRecoilState } from 'recoil';
import { authenticatedUserState } from 'recoil/atom/auth';

const App = () => {
  const tenant = getTenant();
  const navigate = useNavigate();

  const setAuthenticatedUser = useSetRecoilState(authenticatedUserState);

  const {checkTenant, getAuthUserInfo} = authApis();
  const token = getCookie(ACCESS_TOKEN);

  const {data: tenantInfo, isLoading} = useQuery(
    [CHECK_TENANT_KEY, tenant],
    () => checkTenant(tenant),
    {suspense: false, cacheTime: Infinity}
  );

  const {data: user, isFetching: userLoading} = useQuery(
    [AUTH_USER_INFO_KEY],
    () => getAuthUserInfo(),
    {suspense: false, enabled: Boolean(token)}
  );

  useEffect(() => {
    if(!tenantInfo){
      return ;
    }
    if(tenantInfo.meta.status_code !== 0){
      navigate('/error/tenant', {replace: true});
    } else {
      if(!token){
        navigate('/login', {replace: true});
        return ;
      }
    }
  },[tenantInfo]);

  useEffect(() => {
    if(user){
      const {data: userInfo, meta} = user;
      if(meta.status_code === 0){
        setAuthenticatedUser(userInfo.user);
      }
    }
  },[user]);


  if(isLoading || userLoading){
    return <LoadingScreen />;
  }

  return (
    <Router />
  );
};

export default App;
