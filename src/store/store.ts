import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/uiSlice.ts';
import logicSlice from '../features/logicSlice.ts';

export const store = configureStore({
  reducer: {
    ui: themeReducer,
    logic: logicSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
