import React from "react";
import "./Ban.css";
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
          <div className="content row">
            <div className="weak-topics col-lg-5" style={{}}>
              {(aptitude || core || sde) && (
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
              )}
            </div>

            <div
              className="recommended-courses col-lg-6"
              style={{
                backgroundColor: "red",
              }}
            ></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ban;
