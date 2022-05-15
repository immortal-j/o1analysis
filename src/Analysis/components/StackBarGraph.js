import React from "react";
import Chart from "react-apexcharts";

const StackbarGraph = ({ byId }) => {
  const series = byId?.[0].stackgraph.series;
  const labels = byId?.[0].stackgraph.labels;

  const temp = {
    series: series,
    // series: [
    //   { name: "Right", data: [55, 22, 66, 77, 52, 99, 34] },
    //   { name: "Wrong", data: [-35, -10, -22, -17, -26, -23, -21] },
    // ],
    options: {
      title: {
        text: "No of correct and incorrect answers",
        align: "Center",
        style: {
          color: "#fff",
        },
      },
      chart: {
        toolbar: { show: false },
        type: "bar",
        stacked: "true",
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#EB5797"],
      },
      // colors: ["rgba(237, 10, 51,0.5)", "#ED0A33"],
      colors: ["#00ff7f", "#ff0000"],
      // colors: ["#60F820", "#D1043A"],

      tooltip: {
        shared: true,
        intersect: false,
        followCursor: true,
        theme: "dark",
        style: {
          fontSize: "10px",
          fontFamily: undefined,
        },
      },
      grid: {
        show: false,
      },
      legend: {
        labels: {
          colors: "white",
        },
      },
      xaxis: {
        categories: labels,
        // categories: ["DAA", "DSA", "AI", "DBMS", "React", "OS", "MERN"],
        labels: {
          style: {
            colors: "#fff",
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
          },
        },
      },
    },
  };

  return <Chart type="bar" options={temp.options} series={temp.series} />;
};

export default StackbarGraph;
