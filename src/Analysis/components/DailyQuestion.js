import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContestData from './ContestData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 800,
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowX: "hidden",
  overflowY: "auto",
  p: 4,
};

export default function DailyQuestion({ openQOTD, handleCloseQOTD, handleOpenQOTD }) {


  return (
    <div>
      <Modal
        open={openQOTD}
        onClose={handleCloseQOTD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h5'>Question of the Day</Typography>
          <Typography variant={'body1'}>1. What is this?</Typography>
        </Box>
      </Modal>
    </div>
  );
}
