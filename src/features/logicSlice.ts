import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  SelectedElement,
  Delay,
} from '../types/global-state-types/GlobalTypes';

type State = {
  selectedElement: SelectedElement;
  delayInSeconds: Delay;
};

const initialState: State = {
  selectedElement: null,
  delayInSeconds: 0,
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
      state.delayInSeconds = action.payload;
    },
  },
});

export const { savedElement, delayForTimer } = logicSlice.actions;
export default logicSlice.reducer;
