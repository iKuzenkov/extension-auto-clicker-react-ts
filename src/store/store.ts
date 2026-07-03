import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/uiSlice';
import logicReducer from '../features/logicSlice';
import cookieReducer from '../features/cookieSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    logic: logicReducer,
    cookie: cookieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ['logic.selectedElement'],
        ignoredActions: ['logic/savedElement'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
