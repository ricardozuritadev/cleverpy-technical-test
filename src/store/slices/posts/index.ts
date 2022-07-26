import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';

// Definición del type del slice
interface PostsState {
  list: [];
  isLoading: boolean;
}

// Definición del estado inicial
const initialState: PostsState = {
  list: [],
  isLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadingPosts: state => {
      state.isLoading = true;
    },
    setPosts: (state, action: PayloadAction<[]>) => {
      state.list = action.payload;
      state.isLoading = false;
    },
  },
});

export const { loadingPosts, setPosts } = postsSlice.actions;
