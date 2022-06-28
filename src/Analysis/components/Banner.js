import React from "react";
import "./Banner.css";
import women from "../Assets/women.png";
import Man from "../Assets/Man.png";
import bannerImg from "../Assets/banner.png";
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
            <Typography
              variant="h3"
              style={{ fontFamily: "Poppins", marginTop: "1rem" }}
            >
              Featured Courses
            </Typography>
            {(apti || core || sde_bootcamp) && (
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

          <div
            style={{
              display: "flex",
              gap: "6rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <img
              src={bannerImg}
              alt=""
              style={{
                width: "100%",
                margin: "1rem 0",
                border: "0.51rem #f25c00 solid",
                borderRadius: "1.3rem",
              }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
