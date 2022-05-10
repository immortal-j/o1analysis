import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getData } from "../API/api";

const LeetCode = ({byId}) => {
  
  const series=byId?.[0].leetcode.series;
  const labels=byId?.[0].leetcode.labels;

  const temp = {
    series: series,
    // series: [55,33,44],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      title: {
        text: "Levelwise Score Distribution",
        align: "Center",
        fontSize: "40px",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: labels,
    },
  };
  return (
    <Chart type="radialBar" series={temp.series} options={temp.options}></Chart>
  );
};

export default LeetCode;
