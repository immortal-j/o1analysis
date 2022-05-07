import { Box } from '@mui/system'
import React from 'react'
import laptopImg from '../images/laptop_for_webpage.png'
const CircleStyle = {
  position:"absolute",top:"15vh",
  right:"13vw",
    height:"33em",
    width:"33em",
    minHeight:"20em",
    minWidth:"20rem",
    borderRadius:"50%",
    background: "rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%",
    transform: "perspective(600px)",
    color:"white",
    boxShadow:" rgba(103, 0, 255, 0.4) 0px 10px 60px 0px",
    '@media (maxWidth: 500px)': {
      display: 'none',
    },

    
}


const laptopStyle ={
  height:"28rem",
  perspective:"1000px"

}
const Circle = () => {
  return (
    <Box style={CircleStyle}>
      <img src={laptopImg} style={laptopStyle} alt="" />
</Box>
  )
}

export default Circle