import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  SelectedElement,
  Delay,
} from '../types/global-state-types/GlobalTypes';

type State = {
  selectedElement: SelectedElement;
  delayInMilliseconds: Delay;
  isRunningTimerState: boolean;
  quantityClicks: number;
};

const initialState: State = {
  selectedElement: null,
  delayInMilliseconds: 0,
  isRunningTimerState: false,
  quantityClicks: 0,
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
    quantityState: (state): void => {
      state.quantityClicks += 1;
    },
  },
});

export const { savedElement, delayForTimer, timerState, quantityState } =
  logicSlice.actions;
export default logicSlice.reducer;
