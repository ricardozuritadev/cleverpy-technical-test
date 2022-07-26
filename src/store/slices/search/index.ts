import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Definición del type del slice
interface SearchState {
  text: string;
}

// Estado inicial
const initialState: SearchState = {
  text: '',
};

// Admin slice
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

// Admin actions
export const { setSearch } = searchSlice.actions;
