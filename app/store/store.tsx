import { configureStore } from '@reduxjs/toolkit';
import homeListReducer from './slices/homeSlice';
import auth from './slices/authSlice';
export const store = configureStore({
  reducer: {
    homeList: homeListReducer,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
