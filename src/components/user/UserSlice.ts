import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  firstname: string;
  lastname: string;
  mail: string;
  role: string;
  nbPages: number;
  connexionDate: Date | null;
  isConnected: boolean;
}

const initialState = {
  firstname: '',
  lastname: '',
  mail: '',
  role: 'client',
  nbPages: 0,
  connexionDate: null,
  isConnected: false,
} as UserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    connexion(state, action: PayloadAction<{ date: Date; mail: string }>) {
      state.firstname = 'John';
      state.lastname = 'Doe';
      state.mail = action.payload.mail;
      state.connexionDate = action.payload.date;
      state.isConnected = true;
    },
    logout(state) {
      state.firstname = '';
      state.lastname = '';
      state.mail = '';
      state.nbPages = 0;
      state.connexionDate = null;
      state.isConnected = false;
    },
  },
});

export const { connexion, logout } = userSlice.actions;
export default userSlice.reducer;
