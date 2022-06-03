
import styled from "styled-components";
import React from "react";
import './Banner.css'
import women from '../Assets/women.png'
import logo from "../Assets/Logo/logo2.svg";
import ds from "../Assets/ds.jpg";
import { Button, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

const Banner = ({name}) => {
  return (
    <div>
    <div className="banner-container">
      <div className="banner">
        <div className="content">
          <Typography variant="h3">Data Structure Course</Typography>
          <Typography variant="body2">Hey {name}, Based on your performance. Your weak topic is Dynamic Programming. You can level up the skill by enrolling in our courses.</Typography>
          {/* <Button  variant="contained" style={{background: "white",
    color: "#002299"}}>
            Enroll Here
          </Button> */}
        </div>
        
    <div style={{display:'flex', gap:"2rem", justifyContent:"space-around"}}>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/></div>
      </div>
    </div>
  </div>
  );
};




export default Banner;
