import React from "react";
import "./Ban.css";
import { Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import rohitdoshi from "../Assets/rohitdoshi.jpg";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: 300,
    width: "100%",
    backgroundColor: "#10143f",
    boxShadow: "0px 0px 5px #c7c7c7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
    paddingBottom: 20,
    [theme.breakpoints.down("md")]: {
      minHeight: 280,
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 260,
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 240,
      width: "100%",
    },
  },
  avatarContainer: {
    height: 100,
    width: 100,
    position: "absolute",
    top: -50,
    zIndex: 1,
    borderRadius: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: 90,
      width: 90,
      top: -45,
    },
    [theme.breakpoints.down("md")]: {
      height: 80,
      width: 80,
      top: -40,
    },
    [theme.breakpoints.down("xs")]: {
      height: 70,
      width: 70,
      top: -35,
    },
  },
  avatar: {
    width: "95%",
    height: "95%",
    backgroundColor: "#06232a",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& > p": {
      margin: 0,
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "3.5rem",
      fontWeight: 700,
      color: "#fda12e",
      [theme.breakpoints.down("md")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
  },
  body: {
    marginTop: 30,
    flex: 1,
    textAlign: "center",
    padding: "5%",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      marginTop: 55,
      fontSize: "0.98rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 45,
      fontSize: "0.94rem",
    },
  },
  author: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "5px 0px 5px 0px",
  },
}));

const Ban = ({ weak, name }) => {
  const sde = weak?.sde_bootcamp;
  const aptitude = weak?.apti;
  const core = weak?.core;

  const classes = useStyle();

  return (
    <Container maxWidth={"xl"}>
      <div className="banner-container-1">
        <Typography
          variant="h3"
          style={{
            fontFamily: "Poppins",
            fontSize: "2.5rem",
            textAlign: "center",
            // marginBottom: "1rem",
            marginTop: "2rem",
            color: "white",
          }}
        >
          Placement Training Scholarship
        </Typography>
        <div className="banner-1">
          <div className="content row">
            <div className="weak-topics col-lg-4 col-sm-12" style={{}}>
              {(aptitude || core || sde) && (
                <Typography
                  variant="body2"
                  style={{ fontWeight: "100", fontSize: "1.3rem" }}
                >
                  Hey {name}, Based on your performance, Your weak topics is/are
                  as follows:
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
            <div className="recommended-courses col-lg-7 col-sm-12">
              <Grid item className={classes.root}>
                <Grid
                  item
                  className={[
                    classes.avatarContainer,
                    "testimonial-avatar-container",
                  ].join(" ")}
                >
                  <img
                    className={[classes.avatar, "testimonial-avatar"].join(" ")}
                    src={rohitdoshi}
                    alt="Rohit Doshi"
                  />
                </Grid>
                <Grid
                  item
                  xs={11}
                  className={[classes.body, "testimonial-body"].join(" ")}
                >
                  <Typography style={{}}>
                    Hey, I'm Rohit Doshi, SDE at Amazon. We conduct{" "}
                    <b>"Placement Training"</b> wherein dream company placed
                    experts train students from all across India to master
                    Aptitude and Core Subjects for Interviews. <br />
                    <br /> Though the actual cost of the course is Rs. 4000, we
                    are giving away a few seats of the upcoming batch to
                    deserving students at a <b>75% scholarship</b> i.e. at Rs.
                    1000 only <br />
                    <br /> To get the scholarship, you need to score at least
                    50% marks in the{" "}
                    <a
                      href="https://forms.gle/Krh6cHT3bYSLh3aJ7"
                      target={"_blank"}
                    >
                      Scholarship MCQ Test
                    </a>
                    . The test is pretty simple & it will hardly take 10 minutes
                    to give the test, so give the test now & get valuable
                    training at a 75% scholarship.
                  </Typography>
                </Grid>
                <Grid
                  item
                  className={[classes.author, "testimonial-author"].join(" ")}
                >
                  <Grid item>
                    <h4> Rohit Doshi (SDE @ Amazon) </h4>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ban;
