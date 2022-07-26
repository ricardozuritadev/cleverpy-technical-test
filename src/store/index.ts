import { configureStore } from '@reduxjs/toolkit';
import { postsSlice, usersSlice, adminSlice, searchSlice } from './slices';

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
    admin: adminSlice.reducer,
    seacrh: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
