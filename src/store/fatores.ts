import { createSlice } from "@reduxjs/toolkit";
type Fatores = {
  [key: string]: number;
};
const slice = createSlice({
  name: "fatores",
  initialState: {
    montante: 0,
    capitalAplicado: 0,
    taxaJuros: 0,
    tempo: 0,
  } as Fatores,
  reducers: {
    changeValue(state, action) {
      return { ...state, [action.payload[0]]: action.payload[1] };
    },
  },
});

export const { changeValue } = slice.actions;
export default slice.reducer;
