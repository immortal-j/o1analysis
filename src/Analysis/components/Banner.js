
import styled from "styled-components";
import React from "react";
import './Banner.css'
import women from '../Assets/women.png'
import logo from "../Assets/Logo/logo2.svg";
import ds from "../Assets/ds.jpg";
import { Button, Typography } from "@mui/material";

const Banner = ({name}) => {
  return (
    <div>
    <div className="banner-container">
      <div className="banner">
        <div className="shoe">
          <img src={ds} alt="" />
        </div>
        <div className="content">
          <Typography variant="h3">Data Structure Course</Typography>
          <Typography variant="body2">Hey {name}, It seems like you need some help in dynamic programming. To enroll in our course get Master in Dyanmic Prograaming</Typography>
          <Button  variant="contained" style={{background: "white",
    color: "#002299"}}>
            Enroll Here
          </Button>
        </div>
        <div className="women">
          <img src={women}alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};




export default Banner;
