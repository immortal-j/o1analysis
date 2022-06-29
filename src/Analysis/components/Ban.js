import React from "react";
import Man from "../Assets/Man.png";
import "./Ban.css";
import CourseCard from "./CourseCard";
import { Container, Typography } from "@mui/material";
const Ban = ({weak,name}) => {
  console.log(weak);
  const sde=weak?.sde_bootcamp
  const aptitude=weak?.apti
  const core=weak?.core
  return (
    <Container maxWidth={'xl'} >
          
      <div class="banner-container-1">
        <div class="banner-1">
                    <div class="content">
            <div>
            {(aptitude || core || sde) && (
              <Typography
                variant="body2"
                style={{ fontWeight: "100", fontSize: "1.3rem" }}
              >
                Hey {name}, Based on your performance, Your weak topics is/are as follows:
                <br />
                <span
                  style={{fontSize: "inherit",fontWeight: "600",color: "#ffbe37",textAlign:"left", textTransform:"capitalize"
                  }}
                >
                 {sde && <li>{sde}</li>}
                 {aptitude && <li>{aptitude}</li>}
                 {core && <li>{core}</li>}
                </span>
              </Typography>
            )}
            <Typography
              variant="h6"
              style={{
                textAlign: "left",
                color: "#f4f4ff",
                marginBottom: "1rem",
                textTransform: "capitalize",
              }}
            >
              Recommended for {name}
            </Typography>
            </div>
            {sde && 
            <CourseCard courseName={"Complete SDE Bootcamp - Master Course"} />
          }{
            aptitude && <CourseCard courseName={"Aptitude Series - Self Pace"} /> 
          }
          {  core && 
            <CourseCard courseName={"Core Subjects - Crash Course"} />
          }
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
