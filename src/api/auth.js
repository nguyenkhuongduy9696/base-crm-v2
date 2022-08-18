import { axiosInstance } from 'helpers/axios';

export function authApis () {
  const checkTenant = async (tenant) => {
    const url = window.location.hostname.split('.');
    const type = url[1];
    const {data} = await axiosInstance.get(`/tenant/tenant/${tenant}?app_type=${type === 'posx' ? 'sell' : 'crm'}`);
    return data;
  };

  const getAuthUserInfo = async () => {
    const {data} = await axiosInstance.get('/user/me');
    return data;
  };

  const login = async (params) => {
    const {data} = await axiosInstance.post('/auth/login', params);
    return data;
  };

  return {checkTenant, getAuthUserInfo, login};
}