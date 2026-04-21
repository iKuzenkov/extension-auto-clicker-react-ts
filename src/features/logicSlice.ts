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
  countDown: number;
  timeUntilNextClick: string;
};

const initialState: State = {
  selectedElement: null,
  delayInMilliseconds: 0,
  isRunningTimerState: false,
  quantityClicks: 0,
  countDown: 0,
  timeUntilNextClick: '00h:00m:00s',
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
    setCountDown: (state, action: PayloadAction<number>): void => {
      state.countDown = action.payload;
    },
    decreaseCountDown: (state): void => {
      state.countDown -= 1000;
    },
    timeUntilNextClickResult: (state, action: PayloadAction<string>): void => {
      state.timeUntilNextClick = action.payload;
    },
  },
});

export const {
  savedElement,
  delayForTimer,
  timerState,
  quantityState,
  setCountDown,
  decreaseCountDown,
  timeUntilNextClickResult,
} = logicSlice.actions;
export default logicSlice.reducer;
