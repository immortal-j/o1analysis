import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { BiBold } from 'react-icons/bi';
import styled from "styled-components";
import GraphWrapper from './GraphWrapper';

const Linegraph = () => {
  const[state,setstate]=useState({
    options: {
      chart: {
        id: "basic-line",
        color:"#0000FF",
      },
      markers: {
        size: 5,
        colors:"#008000"
    },
    yaxis:{
      labels:{
        style:{
          colors: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
            fontWeight:"bold",
            fontSize:14,
        }
      }
    },
      xaxis: {
        labels: {
          style: {
            colors: ["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"],
            fontWeight:"bold",
            fontSize:14,
          },
        },
        categories: ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5", "Topic6", "Topic7"," Topic8", "Topic9"],
        title: {
          text: "Topicwise Strength",
          align: "center",
          floating: false,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#fff",
          },
          
        },
      }
    },
    series: [
      {
        name: "Strength",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
        color:"#0000FF"
      }
    ]
    
  })
  return (
    <Wrapper><Chart
    options={state.options}
    series={state.series}
    type="line"
    width="1000"
    height="500"
  />
  
  </Wrapper>
    
  )
  
};

const Wrapper = styled.div`
  padding: 1rem;
  background-color: #262834;
  border-radius: 1.8rem;
 max-width: 100;
 border:5px,
 border-color:0000FF
`;
export default Linegraph;
