import { Button, Container, Grid, TextField, Typography,MenuItem, Backdrop, CircularProgress} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import login from "../../images/login.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    key: "",
    college: "",
  });
  console.log(props);

  const [loading,setLoading]=useState(false)
  const [clgList,setClgList]=useState([])

  const getCollegeName = async () => {
    const fetchNames = await axios.get(
      `https://o1apti.herokuapp.com/college_list`
    );
    setClgList( fetchNames.data.clg_names);
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
    // props.handleClose();
    // e.preventDefault();
    setLoading(true)
    axios
      .post(`https://o1apti.herokuapp.com/auth/register/`, userData)
      .then((res) => {
        setLoading(false)
        toast.success("User Register Successfully");
      })
      .catch(function (error) {
        setLoading(false)
        // props.handleClose();

        if(error.response.data==="EMAIL ALREADY EXIST")
        toast.error("Email Already Exist.");

        if(error.response.data==="INVALID DATA")
        toast.warn("Please fill all the fields.")
        else{
          console.log(error.response);
          toast.warn("Something goes wrong. Please try again.");

        }
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
              color="secondary"
              fullWidth
              select
              onChange={handleInputs}
              value={userData.college}
              name="college"
              id="standard-basic"
              label="College Name"
              variant="filled"
              required
            >
              {clgList.map((option,key) => (
                <MenuItem key={key} value={option}>
                  {option}
                </MenuItem>
              ))}
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
              size={"lg"}
              onClick={(e)=>{ props.handleClose();submitData(e);}}
              style={{ marginTop: "1rem" }}
            >
             { loading?
                <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}             
              >
                <CircularProgress color="secondary" />
              </Backdrop> : <span>Register Now </span> 
              }
            </Button>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
    </>
  );
};

export default RegisterForm;
