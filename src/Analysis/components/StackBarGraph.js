import React from "react";
import Chart from "react-apexcharts";

const StackBarGraph = () => {
  const tempData = {
    series: [
      {
        name: "Right Answered",
        data: [44, 55, 41, 64, 22, 43],
      },
      {
        name: "Wrong Answered",
        data: [-53, -32, -33, -52, -13, -44],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 430,
        stacked: true,
        background: "#000033",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "center",
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
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        labels: {
          style: {
            colors: "#FFFFFF",
          },
        },
        categories: [
          "Operating Systems",
          "DSA",
          "DAA",
          "AI",
          "Microprocessor",
          "Information Security",
        ],
      },

      legend: {
        show: false,
        style: {
          colors: "#fff",
        },
      },
      grid: {
        show: false,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#FFFFFF",
          },
        },
        show: true,
      },
      fill: {
        
        // colors: ["#7B367F","#371E59", "#AD67A5", "#954F95", "#B019C1"],
        type: ["gradient"],
        gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            // stops: [0, 50, 100],
            colorStops: []
        },
      },
    },
  };

  return (
    <Chart
      type="bar"
      options={tempData.options}
      series={tempData.series}
      width="800"
    />
  );
};

export default StackBarGraph;
