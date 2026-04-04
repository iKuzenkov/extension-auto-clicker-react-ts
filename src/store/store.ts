import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/uiSlice.ts';
import logicReducer from '../features/logicSlice.ts';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    logic: logicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
