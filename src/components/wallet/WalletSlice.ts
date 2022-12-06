import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  deposit: number;
  devise: string;
  user: string;
  historic: {
    action: string;
    amount: number;
    deposit: number;
    devise: string;
  }[];
}

const initialState = {
  deposit: 0,
  devise: '€',
  user: 'John Doe',
  historic: [],
} as WalletState;

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.deposit += action.payload;
      state.historic = [
        ...state.historic,
        {
          action: 'ADD',
          amount: action.payload,
          deposit: state.deposit,
          devise: state.devise,
        },
      ];
    },
    sub(state, action: PayloadAction<number>) {
      state.deposit -= action.payload;
      state.historic = [
        ...state.historic,
        {
          action: 'SUB',
          amount: action.payload,
          deposit: state.deposit,
          devise: state.devise,
        },
      ];
    },
    empty(state) {
      state.deposit = 0;
    },
    updateDevise(state, action: PayloadAction<string>) {
      state.devise = action.payload;
    },
    updateUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});

export const { add, sub, empty, updateDevise, updateUser } =
  walletSlice.actions;
export default walletSlice.reducer;
