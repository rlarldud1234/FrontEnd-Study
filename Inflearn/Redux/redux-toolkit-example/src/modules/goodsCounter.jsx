import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: 10,
  goods: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.stock -= 1;
      state.goods += 1;
    },
    decrement: (state, action) => {
      state.stock += 1;
      state.goods -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const goodsReducer = counterSlice.reducer;
