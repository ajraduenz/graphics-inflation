import { createSlice } from "@reduxjs/toolkit";
import store from "./configureStore";
type Fatores = {
  [key: string]: number | string;
};
const slice = createSlice({
  name: "fatores",
  initialState: {
    entrada: { montante: 0, capitalAplicado: 0, taxaJuros: 0, tempo: 0, periodo: "Mensal" },
    parcelaPorPeriodo: [] as number[],
  },
  reducers: {
    changeValue(store, action) {
      (store.entrada.capitalAplicado = action.payload.capitalAplicado.valor),
        (store.entrada.taxaJuros = action.payload.taxaJuros.valor),
        (store.entrada.tempo = action.payload.tempo.valor),
        (store.entrada.montante =
          action.payload.capitalAplicado.valor *
          (Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, action.payload.tempo.valor) - 1)),
        (store.entrada.periodo = action.payload.periodo);
      for (let i = 1; i <= action.payload.tempo.valor; i++) {
        store.parcelaPorPeriodo.push(
          action.payload.capitalAplicado.valor *
            (Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, i) - 1),
        );
      }
    },
    // calulateSimple: (store, action) => {
    //   return { ...store, montante: store.capitalAplicado * (Math.pow(1 + store.taxaJuros, store.tempo) - 1) };
    // },
    // calulateDetailed: (store, action) => {
    //   for (i = 1; i <= months; i++) {
    //     futureValue = (futureValue + investment) * (1 + monthlyRate);
    //   }
    // },
  },
});

export const { changeValue } = slice.actions;
export default slice.reducer;
