import { atom } from 'recoil';

export const pageNumberState = atom({
  key: 'pageNumber',
  default: 1,
});
