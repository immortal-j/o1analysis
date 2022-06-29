import React from "react";
import Chart from "react-apexcharts";

const LeetCode = (props) => {
  // const series=byId?.[0].leetcode.series;
  // const labels=byId?.[0].leetcode.labels;
  const getPercentile = (par) => {
    return parseFloat((par / total) * 100).toFixed(2);
  };
  const labels = props.leetcodeLabel;
  const orignalseries = props.leetcodeSeries;
  const total=props.leetcodeTotal.toFixed(2)

  const series = [
    orignalseries[0].toFixed(2),
    orignalseries[1].toFixed(2),
    orignalseries[2].toFixed(2),
  ];
  const temp = {
    series: series,
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      title: {
        text: "Levelwise Score Distribution",
        align: "Center",
        fontSize: "40px",
        style: {
          color: "#fff",
        },
      },
      // colors:["#0169CD","#6794DC","#6771DC"],
      colors: ["#DC143C","#FBB500",  "#0BDA51"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
              color: "white",
            },
            total: {
              show: true,
              label: "Total",
              color: "white",
              formatter: function (w) {
                // return w.globals.seriesTotals.reduce((a, b, c) => {
                //   return a + b + c;
                // }, 0);
                return total;
              },
            },
          },
        },
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: "325rem",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <Chart type="radialBar" series={temp.series} options={temp.options}></Chart>
  );
};

export default LeetCode;
