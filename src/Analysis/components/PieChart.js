import React from "react";
import Chart from "react-apexcharts";

const PieChart = (props) => {
  // const series = byId?.[0].piechart.series;
  // const labels = byId?.[0].piechart.labels;

  const labels=props.PieChartLabel
const series=props.PieChartSeries
  const line = {
    series: series,
    options: {
      chart: {
        type: "pie",
      },

      title: {
        text: "Overall Analysis ",
        align: "centre",
        margin: 10,
        padding: 0,
        offsetX: 0,
        offsetY: 0,
        padding: "20px",
        floating: false,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
        },
      },

      legend: {
        position: "bottom",
        labels: {
          colors: "white",
          // useSeriesColors: true,
        },
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {},
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return <Chart type="pie" options={line.options} series={line.series} />;
};

export default PieChart;
