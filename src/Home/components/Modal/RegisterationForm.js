import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import login from "../../images/login.svg";

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    key: "",
    college: "",
  });
  
  let key, value;
  const handleInputs = (e) => {
    key = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [key]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post(`https://o1apti.herokuapp.com/auth/register/`, userData)
      .then((res) => {
        console.log(res.data);
        if (res.status !== 400 || res.status !== 404) {
          window.alert("User Register Successfully");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    setUserData({ name: "", email: "", mobile: "", key: "", college: "" });
  };

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
          <Grid item md={6} xs={6} display={{ md: "block", xs: "none" }}>
            <img
              src={login}
              alt=""
              srcSet=""
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography variant={"h4"} marginBottom={2}>
              Register Here
            </Typography>
            <TextField
              margin={"dense"}
              fullWidth
              type="email"
              onChange={handleInputs}
              value={userData.email}
              name="email"
              id="standard-basic"
              label="Email"
              variant="filled"
              color="secondary"
              required
            />
            <TextField
              margin={"dense"}
              fullWidth
              onChange={handleInputs}
              value={userData.name}
              name="name"
              color="secondary"
              id="standard-basic"
              label="Student's Name"
              variant="filled"
              required
            />
            <TextField
              margin={"dense"}
              fullWidth
              onChange={handleInputs}
              name="key"
              type="password"
              color="secondary"
              value={userData.key}
              id="standard-basic"
              label="Key"
              variant="filled"
              required
            />
            <TextField
              margin={"dense"}
              color="secondary"
              fullWidth
              onChange={handleInputs}
              value={userData.college}
              name="college"
              id="standard-basic"
              label="College Name"
              variant="filled"
              required
            />
            <TextField
              margin={"dense"}
              color="secondary"
              fullWidth
              onChange={handleInputs}
              value={userData.mobile}
              name="mobile"
              id="standard-basic"
              label="Mobile"
              type="number"
              variant="filled"
              required
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={submitData}
              style={{ marginTop: "1rem" }}
            >
              Register Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RegisterForm;
