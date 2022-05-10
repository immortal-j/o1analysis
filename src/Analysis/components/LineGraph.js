import React from "react";
import Chart from "react-apexcharts";
const LineGraph = ({byId}) => {

  const series=byId?.[0].linegraph.series;
  const labels=byId?.[0].linegraph.labels;


  const temp = {
    series: series,
    // series: [
    //   {
    //     name: "Subjects",
    //     data: [12, 20, 33, 36, 32, 32, 33],
    //   },
    // ],
    options: {
      chart: {
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      // stroke: {
      //   curve: "smooth",
      // },
      title: {
        text: "Subject-Wise Performance",
        align: "Center",
        style: {
          color: "#fff",
        },
      },
      xaxis: {
        categories: labels,
        // categories: ["DAA", "DSA", "AI", "DBMS", "React", "OS", "MERN"],
        Labels: {
          style: {
            color: "#fff",
          },
        },
        title: {
          text: "Subjects",
        },
      },
      yaxis: {
        title: {
          text: "Performance",
        },
      },
      grid: {
        show: false,
        borderColor: "#e7e7e7",
      },
      markers: {
        size: 3,
      },
      tooltip: {
        shared: true,
        intersect: false,
        followCursor: true,
        theme:"dark",
        style: {
          fontSize: "10px",
          fontFamily: undefined,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            {
              offset: 0,
              color: "#EB656F",
              opacity: 1,
            },
            {
              offset: 20,
              color: "#FAD375",
              opacity: 1,
            },
            {
              offset: 60,
              color: "#61DBC3",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#95DA74",
              opacity: 1,
            },
          ],
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  };
  return <Chart type="line" options={temp.options} series={temp.series} />;
};

export default LineGraph;
