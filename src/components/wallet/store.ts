import { configureStore } from '@reduxjs/toolkit';
import WalletSlice from './WalletSlice';

const store = configureStore({
  reducer: {
    wallet: WalletSlice,
  },
});
export default store;
