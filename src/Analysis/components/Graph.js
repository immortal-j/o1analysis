import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const Graph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: [
      "Operating Systems",
      "Data Structures",
      "Design & Analysis of Algorithm",
      "Microprocessor",
      "Artificial Intelligence",
    ],
    datasets: [
      {
        data: [80, 45, 40, 10, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.95)",
          "rgba(54, 162, 235, 0.95)",
          "rgba(255, 206, 86, 0.95)",
          "rgba(75, 192, 192, 0.95)",
          "rgba(153, 102, 255, 0.95)",
          "rgba(255, 159, 64, 0.95)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div style={{ width: "20rem" }}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={{ width: "55rem" }}>
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default Graph;
