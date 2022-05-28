import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Form from "../Form";
import styled from 'styled-components'
import RegisterForm from "./RegisterationForm";


// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "20rem",

//   border: '2px solid #000',
//   borderRadius: "6px",
//   boxShadow: 24,
//   p: 4,
//   backgroundColor: "#8400ff"
//   // backdropfilter: " 2000px",

// };

function KeepMountedModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="btn-giveTest" onClick={handleOpen}>
        Give Test
      </button>
      <button className="btn-giveTest" onClick={event =>  window.location.href='/dashboard'}>
        CheckResults
      </button>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box >
          <RegisterForm handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}


export default KeepMountedModal;
