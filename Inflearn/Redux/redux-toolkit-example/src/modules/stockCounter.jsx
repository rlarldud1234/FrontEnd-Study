import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "판매중!!!",
};

export const stockSlice = createSlice({
  name: "stockCounter",
  initialState,
  reducers: {
    soldOut: (state, action) => {
      state.message = "완판";
    },
  },
});

export const { soldOut } = stockSlice.actions;
export default stockSlice.reducer;
