import { configureStore } from '@reduxjs/toolkit';
import UserSlice from '../user/UserSlice';
import WalletSlice from './WalletSlice';

const store = configureStore({
  reducer: {
    wallet: WalletSlice,
    user: UserSlice,
  },
});
export default store;
