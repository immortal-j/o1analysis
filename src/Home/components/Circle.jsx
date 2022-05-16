import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import laptopImg from "../images/laptop_for_webpage.png";





const Circle = () => {
  return (
    <CircleStyle>
      <img src={laptopImg}  alt="" />
   </CircleStyle>
  );
};

export default Circle;


const CircleStyle = styled.div`
position: relative;
top:3rem;
left:49rem;
height: 33em;
width: 33em;
min-height: 20em;
min-width: 20rem;
background:  rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%;
transform: perspective(600px);

box-shadow:rgba(103, 0, 255, 0.4) 0px 10px 60px 0px;
  border-radius:50%;
img{
  width: 100%;
  object-fit: contain;
  height: 100%;
}
  &:hover {
   transform: scale(1.01);
   transition: 0.3s ease;  
  }

  @media (max-width: 768px) {
height: 15em;
width: 15em;
position: relative;
left: 20px;
  }
`