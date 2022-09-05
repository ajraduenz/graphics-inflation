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
import { RootState } from "../../store/configureStore";

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
  //
  console.log(graficos);
  const options1 = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        position: "right",
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const options2 = {
    scales: {
      y: {
        position: "right",
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [...Array(Number(tempo)).keys()];

  const data1 = {
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "Dataset 2",
        data: labels.map((_, index) => capitalAplicado),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        type: "bar" as const,
        label: "Dataset 1",
        data: labels.map((_, index) => graficos[graficos.length - 1].parcelas[index]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  const data2 = {
    labels,
    datasets: [
      ...graficos?.map((grafico) => {
        console.log(grafico);
        return {
          type: "line" as const,
          label: grafico.titulo,
          borderColor: randomRGB(),
          borderWidth: 2,
          fill: false,
          data: grafico?.parcelas.map((valor) => {
            return Number(valor);
          }),
        };
      }),
    ],
  };

  return (
    <>
      <Chart type="bar" options={options1} data={data1} />
      <Chart type="bar" options={options2} data={data2} />
    </>
  );
};

export default ChartTax;
