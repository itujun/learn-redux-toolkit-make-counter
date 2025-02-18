import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterr',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state) {
      state.value--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
