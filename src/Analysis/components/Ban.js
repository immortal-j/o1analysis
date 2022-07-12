import React from "react";
import Man from "../Assets/Man.png";
import "./Ban.css";
import CourseCard from "./CourseCard";
import { Container, Typography } from "@mui/material";

const Ban = ({ weak, name }) => {
  // weak = {};
  // weak = { core: "oops" };
  // weak = { sde_bootcamp: "dsa" };
  // weak = { apti: "general aptitude" };
  // weak = { core: "oops", sde_bootcamp: "dsa" };
  // weak = { core: "oops", apti: "general aptitude" };
  // weak = { sde_bootcamp: "dsa", apti: "general aptitude" };
  // weak = { core: "oops", sde_bootcamp: "dsa", apti: "general aptitude" };

  const sde = weak?.sde_bootcamp;
  const aptitude = weak?.apti;
  const core = weak?.core;
  return (
    <Container maxWidth={"xl"}>
      <div className="banner-container-1">
        <Typography
          variant="h4"
          style={{
            fontFamily: "Poppins",
            marginBottom: "1rem",
            marginTop: "1rem",
            color: "white",
          }}
        >
          Featured Courses
        </Typography>
        <hr />
        <div className="banner-1">
          {(aptitude || core || sde) && (
            <div className="content row">
              <div
                className="weak-topics col-lg-3"
                style={{ marginTop: "-10%", marginLeft: "5%" }}
              >
                <Typography
                  variant="body2"
                  style={{ fontWeight: "100", fontSize: "1.3rem" }}
                  textAlign="left"
                >
                  Hey {name}, <br /> Based on your performance, your weak topics
                  is/are:
                  <br />
                  <br />
                  <span
                    style={{
                      fontSize: "inherit",
                      fontWeight: "600",
                      color: "#ffbe37",
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                  >
                    {sde && <li>{sde}</li>}
                    {aptitude && <li>{aptitude}</li>}
                    {core && <li>{core}</li>}
                  </span>
                </Typography>
              </div>

              <div
                className="recommended-courses col-lg-8"
                style={{ marginLeft: "-5%", marginTop: "-2%" }}
              >
                <Typography
                  variant="h5"
                  style={{
                    textAlign: "center",
                    color: "#f4f4ff",
                    marginBottom: "1rem",
                    // textTransform: "capitalize",
                  }}
                >
                  Recommended for {name}
                </Typography>

                <div className="row">
                  {(!core || !aptitude || !sde) && (
                    <div className="col-lg-1"></div>
                  )}
                  {((!core && !sde) ||
                    (!aptitude && !sde) ||
                    (!core && !aptitude)) && <div className="col-lg-2"></div>}

                  {sde && (
                    <div className="col-lg-3" style={{ marginLeft: "7%" }}>
                      <CourseCard
                        courseName={"Complete SDE Bootcamp "}
                        coursePrice={""}
                        coursePriceNew={5000}
                        website={"https://o1codingclub.in/sde-bootcamp"}
                      />
                    </div>
                  )}
                  {aptitude && (
                    <div className="col-lg-3" style={{ marginLeft: "7%" }}>
                      <CourseCard
                        courseName={"Aptitude Series"}
                        coursePrice={2000}
                        coursePriceNew={1000}
                        website={"https://www.o1codingclub.in/aptitude"}
                      />
                    </div>
                  )}
                  {core && (
                    <div className="col-lg-3" style={{ marginLeft: "7%" }}>
                      <CourseCard
                        courseName={"Core Subjects Crash Course"}
                        coursePrice={2200}
                        coursePriceNew={1500}
                        website={"https://www.o1codingclub.in/core-subjects"}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!sde && !aptitude && !core && (
            <div className="content row">
              <div className="col-lg-3" style={{ marginLeft: "10%" }}>
                <CourseCard courseName={"Complete SDE Bootcamp "} />
              </div>
              <div className="col-lg-3" style={{ marginLeft: "4%" }}>
                <CourseCard courseName={"Aptitude Series"} />
              </div>
              <div className="col-lg-3" style={{ marginLeft: "4%" }}>
                <CourseCard courseName={"Core Subjects Crash Course"} />
              </div>
            </div>
          )}

          {/* <div className="women">
            <img src={Man} alt="" />
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Ban;
