import { atom } from 'recoil';

export const tenantInfoState = atom({
  key: 'tenantInfoState',
  default: null
});

export const authenticatedUserState = atom ({
  key: 'authenticatedUserState',
  default: null
});