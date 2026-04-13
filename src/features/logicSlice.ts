import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SelectedElement } from '../types/global-state-types/GlobalTypes';

type State = {
  selectedElement: SelectedElement;
};

const initialState: State = {
  selectedElement: null,
};

const logicSlice = createSlice({
  name: 'logic',
  initialState,
  reducers: {
    savedElement: (state, action: PayloadAction<SelectedElement>): void => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.selectedElement = action.payload as any;
    },
  },
});

export const { savedElement } = logicSlice.actions;
export default logicSlice.reducer;
