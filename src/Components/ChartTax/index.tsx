import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/juros-compostos/configureStore";

import styles from "./chart.module.scss";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

const ChartTax = () => {
  //
  const graficos = useSelector((state: RootState) => state.fatores.parcelaPorPeriodo);
  const capitalAplicado = useSelector((state: RootState) => state.fatores.entrada.capitalAplicado);
  const tempo = useSelector((state: RootState) => state.fatores.entrada.tempo);
  const aporte = useSelector((state: RootState) => state.fatores.entrada.aporte);
  // console.log(graficos)
  //
  const options = {
    color: "#e6e6e6",
    scales: {
      x: {
        grid: {
          color: "black",
        },
        ticks: {
          color: "#e6e6e6",
        },
        color: "black",
        stacked: true,
      },
      y: {
        grid: {
          color: "black",
        },
        ticks: {
          color: "#e6e6e6",
        },
        // position: "right" - A concertar
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Juros compostos",
      },
    },
  };

  const labels = [...Array(Number(tempo)).keys()].map((num) => num + 1);
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  const data = {
    labels,
    datasets: [
      ...graficos?.map((grafico) => {
        return {
          type: "line" as const,
          label: grafico.titulo,
          borderColor: randomRGB(),
          borderWidth: 2,
          fill: false,
          data: grafico?.parcelas.map((valor) => {
            return Number(valor) + Number(capitalAplicado);
          }),
        };
      }),
      {
        type: "bar" as const,
        label: "Capital Inicial (C)",
        data: labels.map((_, index) => capitalAplicado),
        backgroundColor: "rgba(0, 153, 255, 0.7)",
      },
      {
        type: "bar" as const,
        label: `Capital Inicial + Juros do período${aporte !== 0 ? " e aporte" : ""} `,
        data: labels.map((_, index) => graficos[graficos.length - 1].parcelas[index] + Number(capitalAplicado)),
        backgroundColor: "rgba(200, 40, 74, 0.7)",
      },
    ],
  };

  return (
    <>
      {capitalAplicado !== 0 && (
        <section className={styles.grafico}>
          <Chart type="bar" options={options} data={data} />
        </section>
      )}
    </>
  );
};

export default ChartTax;
