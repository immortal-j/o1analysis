import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const RoundScoreGraph = () => {
  const tempData = {
    series: [70],
    options: {
      chart: {
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              color: "white",
              fontSize: "22px",
            },
          },
          hollow: {
            size: "60%",
          },
        },
      },
      fill: {
        type: "solid",
        colors: ["#0000FF", "#00FF00", "#FF0000"],
      },

      title: {
        text: "Total Problem Solved",
        align: "center",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "white",
        },
      },
    },
  };
  return (
    <>
      <Wrapper>
        <Chart
          options={tempData.options}
          series={tempData.series}
          type="radialBar"
        >
        </Chart>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #262834;
  background-color: white;
  background: linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) 0% 0% repeat scroll rgba(0, 0, 0, 0);
  border-radius: 1.8rem;
  
`;
export default RoundScoreGraph;
