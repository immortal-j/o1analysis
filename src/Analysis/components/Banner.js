import React from "react";
import "./Banner.css";
import bannerImg from "../Assets/courses.jpeg";
import { Container, Typography } from "@mui/material";

const Banner = () => {
  // console.log(apti);
  return (
    <div className="banner-container">
      <div className="banner">
        <Container maxWidth="lg">
        <Typography
              variant="h3"
              style={{ fontFamily: "Poppins", marginBottom: "1rem", marginTop: "1rem",color:"white" }}
            >
              Featured Courses
            </Typography>
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
