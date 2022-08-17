export const getTenant = () => {
  let subDomain = window.location.host.split('.')[0];
  // if(subDomain === 'demo-v3') {
  //   subDomain = 'hosco';
  // }
  return subDomain;
};