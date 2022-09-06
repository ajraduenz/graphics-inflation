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
  const options = {
    scales: {
      x: {
        stacked: true,
      },
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
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);
  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  const data = {
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
            return Number(valor) + Number(capitalAplicado);
          }),
        };
      }),
      {
        type: "bar" as const,
        label: "Dataset 2",
        data: labels.map((_, index) => capitalAplicado),
        backgroundColor: "rgba(0, 153, 255, 0.7)",
      },
      {
        type: "bar" as const,
        label: "Dataset 1",
        data: labels.map((_, index) => graficos[graficos.length - 1].parcelas[index]+ Number(capitalAplicado)),
        backgroundColor: "rgba(200, 40, 74, 0.7)",
      },
    ],
  };

  return (
    <>
      <Chart type="bar" options={options} data={data} />
    </>
  );
};

export default ChartTax;
