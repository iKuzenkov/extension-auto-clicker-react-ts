import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  SelectedElement,
  Delay,
} from '../types/global-state-types/GlobalTypes';

type State = {
  selectedElement: SelectedElement;
  delayInMilliseconds: Delay;
  isRunningTimerState: boolean;
};

const initialState: State = {
  selectedElement: null,
  delayInMilliseconds: 0,
  isRunningTimerState: false,
};

const logicSlice = createSlice({
  name: 'logic',
  initialState,
  reducers: {
    savedElement: (state, action: PayloadAction<SelectedElement>): void => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.selectedElement = action.payload as any;
    },
    delayForTimer: (state, action: PayloadAction<Delay>): void => {
      state.delayInMilliseconds = action.payload;
    },
    timerState: (state, action: PayloadAction<boolean>): void => {
      state.isRunningTimerState = action.payload;
    },
  },
});

export const { savedElement, delayForTimer, timerState } = logicSlice.actions;
export default logicSlice.reducer;
