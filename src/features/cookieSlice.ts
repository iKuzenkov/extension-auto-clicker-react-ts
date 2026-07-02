import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Delay } from '../shared/types/global-state-types/GlobalTypes';

type State = {
  quantity: string;
  setDelayClicks: Delay;
};

const initialState: State = {
  quantity: '',
  setDelayClicks: 0,
};

const cookieSlice = createSlice({
  name: 'cookie-clicker',
  initialState,
  reducers: {
    quantityOfClicks: (state, action: PayloadAction<string>) => {
      state.quantity = action.payload;
    },
    setDelayOfClicks: (state, action: PayloadAction<Delay>) => {
      state.setDelayClicks = action.payload;
    },
  },
});

export const { quantityOfClicks, setDelayOfClicks } = cookieSlice.actions;
export default cookieSlice.reducer;
