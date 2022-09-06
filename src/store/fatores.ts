import { createSlice } from "@reduxjs/toolkit";
import store from "./configureStore";
type Fatores = {
  [key: string]: number | string;
};
const slice = createSlice({
  name: "fatores",
  initialState: {
    entrada: { montante: 0, capitalAplicado: 0, taxaJuros: 0, tempo: 0, periodo: "Mensal" },
    parcelaPorPeriodo: [] as { titulo: string; parcelas: number[]; taxa: number; tempo: number; montante: number }[],
  },
  reducers: {
    changeValue(store, action) {
      const calculoMontante = (action.payload.capitalAplicado.valor *
        (Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, action.payload.tempo.valor) -
          1)) as number;
      (store.entrada.capitalAplicado = action.payload.capitalAplicado.valor),
        (store.entrada.taxaJuros = action.payload.taxaJuros.valor),
        (store.entrada.tempo = action.payload.tempo.valor),
        (store.entrada.montante = calculoMontante),
        (store.entrada.periodo = action.payload.periodo);
      store.parcelaPorPeriodo = [
        ...store.parcelaPorPeriodo,
        {
          titulo: `Taxa ${store.entrada.taxaJuros}%, período ${store.entrada.tempo}`,
          taxa: store.entrada.taxaJuros,
          tempo: store.entrada.tempo,
          montante: calculoMontante,
          parcelas: [
            ...[...Array(Number(action.payload.tempo.valor))].map(
              (cada, index) =>
                (cada =
                  action.payload.capitalAplicado.valor *
                  (Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, index) - 1)),
            ),
          ],
        },
      ];
    },
    clearValues(store) {
      return {
        entrada: { montante: 0, capitalAplicado: 0, taxaJuros: 0, tempo: 0, periodo: "Mensal" },
        parcelaPorPeriodo: [],
      };
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

export const { changeValue, clearValues } = slice.actions;
export default slice.reducer;
