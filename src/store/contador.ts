import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contador",
  initialState: {
    total: 0,
  },
  reducers: {
    incrementar(state) {
      return { total: state.total + 1 };
    },
    reduzir(state) {
      return { total: state.total - 1 };
    },
  },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;