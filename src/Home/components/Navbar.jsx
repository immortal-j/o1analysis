import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Box, Button } from "@mui/material";
import { styled } from "@mui/material";
import logo from '../../Analysis/Assets/Logo/logo2.svg'
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
  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <StyledToolbar elevation={0} flex={1}>
          <a><img src={logo} alt=")(1) Coding Club" srcSet="" style={{ width: "3rem" }} /></a>
          <Box>
            <Button style={ButtonStyle}> Login </Button>
            <Button style={ButtonStyle}> Signup </Button>
          </Box>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
