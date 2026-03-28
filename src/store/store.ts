import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/uiSlice.ts';

export const store = configureStore({
  reducer: {
    ui: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
