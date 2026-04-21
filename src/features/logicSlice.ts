import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  SelectedElement,
  Delay,
  Time,
} from '../types/global-state-types/GlobalTypes';

type State = {
  entryInput: Time;
  selectedElement: SelectedElement;
  delayInMilliseconds: Delay;
  isRunningTimerState: boolean;
  quantityClicks: number;
  countDown: number;
  timeUntilNextClick: string;
};

const initialState: State = {
  entryInput: { hour: '', minute: '', second: '' },
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
    inputsState: (state, action: PayloadAction<Time>): void => {
      state.entryInput = action.payload;
    },
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
    resetLogicState: () => initialState,
  },
});

export const {
  inputsState,
  savedElement,
  delayForTimer,
  timerState,
  quantityState,
  setCountDown,
  decreaseCountDown,
  timeUntilNextClickResult,
  resetLogicState,
} = logicSlice.actions;
export default logicSlice.reducer;
