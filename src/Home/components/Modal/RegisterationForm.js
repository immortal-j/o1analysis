import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import login from "../../images/login.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = ({}) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    key: "",
    college: "",
  });

  const getCollegeName = async () => {
    const clgNames = await axios.get(
      `https://o1apti.herokuapp.com/college_list`
    );
    console.log(clgNames);
  };
  useEffect(() => {
    getCollegeName();
  }, []);

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
      
      
          setOpen(false)
          toast.success("User Register Successfully");
        
      })
      .catch(function (error) {
        toast.warn("Something goes wrong. Please try again.")
        
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
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
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
              // select
              color="secondary"
              fullWidth
              onChange={handleInputs}
              value={userData.college}
              name="college"
              id="standard-basic"
              label="College Name"
              variant="filled"
              required
            >

            </TextField>
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
      <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
      />
    </>
  );
};

export default RegisterForm;
