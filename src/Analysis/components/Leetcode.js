import React from "react";
import Chart from "react-apexcharts";

const LeetCode = (props) => {
  // const series=byId?.[0].leetcode.series;
  // const labels=byId?.[0].leetcode.labels;

  const labels = props.leetcodeLabel;
  const series = props.leetcodeSeries;
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
      colors: ["#FBB500", "#FC248E", "#0169CD"],
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
                return w.globals.seriesTotals.reduce((a, b,c) => {
                  return a +b+c;
                }, 0);
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
