import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartTax = () => {
  //
  const grafico = useSelector((state: RootState) => state.fatores.parcelaPorPeriodo);
  //
  const options = {
    responsive: true,
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

  const labels = [...Array(grafico.length).keys()];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map((_, index) => grafico[index]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map((_, index) => grafico[index]),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default ChartTax;
