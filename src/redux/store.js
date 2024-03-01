import { configureStore } from '@reduxjs/toolkit';
import { advertReduser } from './advert/advertSlice';

export const store = configureStore({
  reducer: {
    advert: advertReduser,
  },
});
