import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'auth_key';

export const getCookie = (name) => {
  return Cookies.get(name);
};
  
export const setCookie = (name, value, expires) => {
  if(!value) {return;}
  return Cookies.set(name, value, {expires: expires/3600});
};
  
export const removeCookie = (name) => {
  return Cookies.remove(name);
};


