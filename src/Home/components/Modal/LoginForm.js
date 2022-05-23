import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import login from "../../images/login.svg";

const LoginForm = () => {
  return (
    <>
      <Container
        maxWidth={"md"}
        style={{
          backgroundColor: "#fff",
          borderRadius: "1rem",
          position: "relative",
          top: "5rem",
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent={"center"}
          alignItems={"center"}
          style={{ padding: "3rem" }}
        >
          <Grid item md={6} xs={6}>
            <img
              src={login}
              alt=""
              srcSet=""
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>

          <Grid item md={6} xs={6}>
            <Typography variant={"h4"} marginBottom={2}>
              Login Here
            </Typography>
            <TextField
              margin={"dense"}
              fullWidth
              id="standard-basic"
              label="Email"
              variant="filled"
              color="secondary"
            />
            <TextField
              margin={"dense"}
              fullWidth
              color="secondary"
              id="standard-basic"
              label="Student's Name"
              variant="filled"
            />
            <TextField
              margin={"dense"}
              fullWidth
              color="secondary"
              id="standard-basic"
              label="Key"
              variant="filled"
            />
            <TextField
              margin={"dense"}
              color="secondary"
              fullWidth
              id="standard-basic"
              label="College Name"
              variant="filled"
            />
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "1rem" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};



export default LoginForm;
