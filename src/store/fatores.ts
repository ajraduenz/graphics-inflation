import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "fatores",
  initialState: {
    entrada: { montante: 0, capitalAplicado: 0, taxaJuros: 0, tempo: 0, periodo: "Mensal", aporte: 0 },
    parcelaPorPeriodo: [] as {
      titulo: string;
      parcelas: number[];
      taxa: number;
      tempo: number;
      montante: number;
      aporte: number;
    }[],
  },
  reducers: {
    changeValue(store, action) {
      const calculoMontante = () => {
        console.log( +store.parcelaPorPeriodo[store.parcelaPorPeriodo.length - 1]?.parcelas[
          store.parcelaPorPeriodo[store.parcelaPorPeriodo.length - 1].parcelas.length - 1
        ].toFixed(2))
        return +store.parcelaPorPeriodo[store.parcelaPorPeriodo.length - 1]?.parcelas[
          store.parcelaPorPeriodo[store.parcelaPorPeriodo.length - 1].parcelas.length - 1
        ].toFixed(2);
      };
      // const aporte = () => {
      //   if (action.payload.aporte.valor === 0) return false;
      //   return true;
      // };
      // const aporte = action.payload.aporte.valor === 0 ? false : true;

      (store.entrada.capitalAplicado = action.payload.capitalAplicado.valor),
        (store.entrada.taxaJuros = action.payload.taxaJuros.valor),
        (store.entrada.tempo = action.payload.tempo.valor),
        (store.entrada.periodo = action.payload.periodo);
      store.entrada.aporte = action.payload.aporte.valor;
      store.parcelaPorPeriodo = [
        ...store.parcelaPorPeriodo,
        {
          titulo: `Taxa ${store.entrada.taxaJuros}%, período ${store.entrada.tempo} ${action.payload.aporte.valor !==0 ? "aporte R$" + action.payload.aporte.valor + " por período" : ""}`,
          taxa: store.entrada.taxaJuros,
          tempo: store.entrada.tempo,
          aporte: store.entrada.aporte,
          parcelas: [
            ...[...Array(Number(action.payload.tempo.valor))].map((cada, index) => {
              if (action.payload.aporte.valor === 0) {
                return (cada =
                  action.payload.capitalAplicado.valor *
                  (Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, index + 1) - 1));
              } else {
                return (cada =
                  action.payload.capitalAplicado.valor *
                    (Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, index + 1) - 1) +
                  store.entrada.aporte *
                    ((Math.pow(1 + action.payload.taxaJuros.valor.replace(",", ".") / 100, index + 1) - 1) /
                      (action.payload.taxaJuros.valor.replace(",", ".") / 100)));
              }

              //  cada = (action.payload.capitalAplicado.valor * Math.pow((1 + action.payload.taxaJuros.valor.replace(",", ".") / 100), index + 1)) + (store.entrada.aporte * (Math.pow((((1 + action.payload.taxaJuros.valor.replace(",", ".") / 100))) − 1) ÷ (action.payload.taxaJuros.valor.replace(",", ".") / 100)))
            }),
          ],
          montante: calculoMontante(),
        },
      ];
      store.entrada.montante = calculoMontante();
    },
    clearValues(store) {
      return {
        entrada: { montante: 0, capitalAplicado: 0, taxaJuros: 0, tempo: 0, periodo: "Mensal", aporte: 0 },
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
