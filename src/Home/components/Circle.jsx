import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import laptopImg from "../images/laptop_for_webpage.png";

// const CircleStyle = {
//   position: "absolute",
//   top: "15vh",
//   right: "13vw",
//   height: "33em",
//   width: "33em",
//   minHeight: "20em",
//   minWidth: "20rem",
//   borderRadius: "50%",
//   background:
//     "rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%",
//   transform: "perspective(600px)",
//   color: "white",
//   boxShadow: " rgba(103, 0, 255, 0.4) 0px 10px 60px 0px",
// };

const laptopStyle = {
  height: "28rem",
  perspective: "10px",
};


const Circle = () => {
  return (
    <CircleStyle>
      <img src={laptopImg} style={laptopStyle} alt="" />
    </CircleStyle>
  );
};

export default Circle;


const CircleStyle = styled.div`
position: absolute;
top: 15vh;
right: 13vw;
height: 33em;
width: 33em;
min-height: 20em;
min-width: 20rem;
background:  rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%;
transform: perspective(600px);

box-shadow:rgba(103, 0, 255, 0.4) 0px 10px 60px 0px;
  border-radius:50%;

  &:hover {
   transform: scale(1.01);
   transition: 0.3s ease;  
  }

  @media (max-width: 768px) {
top:15vh;
height: 15em;
width: 15em;

>*  {
  height: 5em;
  };

&:focus-within{
  height: 15em;
}
  }
`