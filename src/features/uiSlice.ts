import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  Theme,
  HideShow,
} from '../types/global-state-types/GlobalTypes.ts';

type State = {
  theme: Theme;
  isVisible: HideShow;
};

const initialState: State = {
  theme: 'light',
  isVisible: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>): void => {
      state.theme = action.payload;
    },
    toggleHideShow: (state, action: PayloadAction<HideShow>): void => {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleTheme, toggleHideShow } = uiSlice.actions;
export default uiSlice.reducer;
