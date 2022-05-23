import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Overall from "./Overall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DashboardLogin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    let name = email.split("@")[0];
    navigate(`/dashboard/${name}`)
  };
  <Overall  email={email}/>

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            spacing={4}
            justifyContent={"center"}
            alignItems={"center"}
            style={{ padding: "1rem" }}
          >
            <Grid item md={12} xs={12}>
              <Typography variant={"h4"} marginBottom={2}>
                Login Here for Analysis
              </Typography>
              <TextField
                margin={"dense"}
                fullWidth
                type="email"
                name="email"
                id="standard-basic"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
                color="secondary"
                required
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogin}
                style={{ marginTop: "1rem" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    <Overall email={email}/>
    </div>
  );
};

export default DashboardLogin;
