import styled from "styled-components";
import React from "react";
import "./Banner.css";
import women from "../Assets/women.png";
import logo from "../Assets/Logo/logo2.svg";
import ds from "../Assets/ds.jpg";
import { Button, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

const Banner = ({ name, weak }) => {
  const apti = weak.apti;
  const core = weak.core;
  const sde_bootcamp = weak.sde_bootcamp;
  console.log(apti);
  return (
    <div>
      <div className="banner-container">
        <div className="banner">
          <div className="content">
            <Typography variant="h3"></Typography>
            <Typography variant="body2">
              Hey {name}, Based on your performance. Your weak topic is{" "}
              {(core && <span style={{fontSize:'inherit', fontWeight:'600'}}>{core[0]}</span>) ||
                (apti && <span style={{fontSize:'inherit', fontWeight:'600'}}>{core[0]}</span>) ||
                (sde_bootcamp && (
                  <span style={{fontSize:'inherit', fontWeight:'600'}}>{core[0]}</span>
                ))}
              . You can level up the skill by enrolling in our following courses.
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
