import React from "react";
import shoe from "../Assets/shoe.png";
import Man from "../Assets/Man.png";
import "./Ban.css";
import CourseCard from "./CourseCard";
import { Container } from "@mui/material";
const Ban = () => {
  return (
    <Container maxWidth={'xl'}>
      <div class="banner-container-1">
        <div class="banner-1">
          <div class="shoe">{/* <img src={shoe} alt="" /> */}</div>
          <div class="content">
            <CourseCard courseName={"Complete SDE Bootcamp - Master Course"} />
            <CourseCard courseName={"Aptitude Series - Self Pace"} />
            <CourseCard courseName={"Core Subjects - Crash Course"} />
          </div>
          <div class="women">
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ban;
