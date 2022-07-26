import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Definición del type del slice
interface AdminState {
  email: string | null;
  username: string | null;
  password: string | null;
}

// Estado inicial
const initialState: AdminState = {
  email: null,
  username: null,
  password: null,
};

// Admin slice
export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<any>) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

// Admin actions
export const { setAdmin } = adminSlice.actions;
