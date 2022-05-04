import React, { useState } from 'react'
import Chart from "react-apexcharts";
import styled from "styled-components";

const Linegraph = () => {
  const[state,setstate]=useState({
    options: {
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories: ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5", "Topic6", "Topic7"," Topic8", "Topic9"],
        title: {
          text: "Topicwise Strength",
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
      }
    },
    series: [
      {
        name: "Strength",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    
  })
  return (
    <div><Chart
    options={state.options}
    series={state.series}
    type="line"
    width="500"
  />
  
  </div>
    
  )
  
}
export default Linegraph;
