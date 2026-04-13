import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  Theme,
  HideShow,
  Message,
} from '../types/global-state-types/GlobalTypes';

type State = {
  theme: Theme;
  isVisible: HideShow;
  message: Message;
};

const initialState: State = {
  theme: 'light',
  isVisible: true,
  message: '',
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
    statusMessage: (state, action: PayloadAction<Message>): void => {
      state.message = action.payload;
    },
  },
});

export const { toggleTheme, toggleHideShow, statusMessage } = uiSlice.actions;
export default uiSlice.reducer;
