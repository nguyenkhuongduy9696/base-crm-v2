import { axiosInstance } from 'helpers/axios';

export function authApi () {
  const checkTenant = async (tenant) => {
    const url = window.location.hostname.split('.');
    const type = url[1];
    const {data} = await axiosInstance.get(`/tenant/tenant/${tenant}?app_type=${type === 'posx' ? 'sell' : 'crm'}`);
    return data;
  };

  return {checkTenant};
}