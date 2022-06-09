import styled from "styled-components";
import React from "react";
import "./Banner.css";
import women from "../Assets/women.png";
import logo from "../Assets/Logo/logo2.svg";
import ds from "../Assets/ds.jpg";
import { Button, Container, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

const Banner = ({ name, weak }) => {
  const apti = weak.apti;
  const core = weak.core;
  const sde_bootcamp = weak.sde_bootcamp;
  // console.log(apti);
  return (
    <div className="banner-container">
      <div className="banner">
        <Container maxWidth="lg">
          <div className="content">
            <Typography variant="h3" style={{ fontFamily: "Poppins",marginTop:'1rem' }}>
              Featured Courses
            </Typography>
            <Typography
              variant="body2"
              style={{ fontWeight: "100", fontSize: "1.1rem" }}
            >
              Hey {name}, Based on your performance, Your weak topics is/are{" "}
              <span
                style={{
                  fontSize: "inherit",
                  fontWeight: "600",
                  color: "#ffbe37",
                }}
              >
                {weak?.apti?.[0]}
                {", "} {weak?.core?.[0]}
                {", "}
                {weak?.sde_bootcamp?.[0]}
              </span>
            </Typography>
            <Typography
              variant="h6"
              style={{ textAlign: "left", color: "#f4f4ff",marginBottom:"1rem" }}
            >
              Recommended for {name}
            </Typography>
            {/* <Button  variant="contained" style={{background: "white",
    color: "#002299"}}>
            Enroll Here
          </Button> */}
          </div>

          <div
            style={{
              display: "flex",
              gap: "6rem",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {apti && <CourseCard courseName={"Aptitude Series - Self Pace"} />}
            {core && <CourseCard courseName={"Core Subjects - Crash Course"} />}
            {sde_bootcamp && (
              <CourseCard
                courseName={"Complete SDE Bootcamp - Master Course"}
              />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
