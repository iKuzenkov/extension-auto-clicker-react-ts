import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type State = {
  quantity: string;
};

const initialState: State = {
  quantity: '',
};

const cookieSlice = createSlice({
  name: 'cookie-clicker',
  initialState,
  reducers: {
    quantityOfClicks: (state, action: PayloadAction<string>) => {
      state.quantity = action.payload;
    },
    resetLogicCookieState: () => initialState,
  },
});

export const { quantityOfClicks, resetLogicCookieState } = cookieSlice.actions;
export default cookieSlice.reducer;
