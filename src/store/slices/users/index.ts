import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Definición de types
interface UsersState {
  list: [];
  isLoading: boolean;
}

// Estado inicial
const initialState: UsersState = {
  list: [],
  isLoading: false,
};

// Users slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadingUsers: state => {
      state.isLoading = true;
    },
    setUsers: (state, action: PayloadAction<[]>) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

// Users actions
export const { loadingUsers, setUsers } = usersSlice.actions;
