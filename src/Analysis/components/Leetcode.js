import React from "react";
import Chart from "react-apexcharts";

const Leetcode = () => {
  const tempData = {
    series: [44, 55, 67],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            style: {
              fontSize: "14px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: "bold",
              colors: ["#0000FF", "#00FF00", "#FF0000"],
            },
            name: {
              fontSize: "30px",
            },
            value: {
              fontSize: "16px",
              color: "white",
              formatter: function (val) {
                return val + "";
              },
            },
            total: {
              show: true,
              label: "Total Questions Solved",
              color: "white",
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
          hollow: {
            margin: 0,
            size: "70%",
            // background: "#110931",
            background: "#000033",
          },
        },
      },

      fill: {
        type: "solid",
        colors: ["#0000FF", "#00FF00", "#FF0000"],
      },

      labels: ["Easy", "Medium", "Hard"],
    },
  };
  return (
    <div>
      <Chart
        options={tempData.options}
        series={tempData.series}
        type="radialBar"
      />
    </div>
  );
};

export default Leetcode;
