import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, Button, Modal } from "@mui/material";
import { styled } from "@mui/material";
import logo from '../../Analysis/Assets/Logo/logo2.svg'
import LoginForm from "./Modal/RegisterationForm";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "transparent",
  fontFamily: "sans-serif",
});

const ButtonStyle = {
  color: "white",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <StyledToolbar elevation={0} flex={1}>
          <a><img src={logo} alt=")(1) Coding Club" srcSet="" style={{ width: "3rem" }} /></a>
          <Box>
            {/* <Link style={{textDecoration:"none"}} to="/dashboard"><Button style={ButtonStyle}> Login </Button></Link> */}
            {/* <Button style={ButtonStyle} onClick={handleOpen}> Signup </Button> */}
            {/* <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            > */}
              {/* <Box > */}
                {/* <Form /> */}
                {/* <LoginForm />
              </Box>
            </Modal> */}
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
