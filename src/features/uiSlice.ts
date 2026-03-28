import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  Theme,
  HideShow,
} from '../types/global-state-types/uiSliceTypes.ts';

type State = {
  theme: Theme;
  hideShow: HideShow;
};

const initialState: State = {
  theme: 'light',
  hideShow: 'show',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    toggleHideShow: (state, action: PayloadAction<HideShow>) => {
      state.hideShow = action.payload;
    },
  },
});

export const { toggleTheme, toggleHideShow } = uiSlice.actions;
export default uiSlice.reducer;
