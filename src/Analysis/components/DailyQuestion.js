import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContestData from './ContestData';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
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
      {/* <Modal
        open={openQOTD}
        onClose={handleCloseQOTD}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant='h5'>Question of the Day</Typography>
          <Typography variant={'body1'}>1. What is this?</Typography>
        </Box>
      </Modal> */}

      <Dialog
        // fullScreen={fullScreen}
        open={openQOTD}
        onClose={handleCloseQOTD}
        aria-labelledby="responsive-dialog-title"
      >
        <Container maxWidth="xl" >
          <Typography variant='h5'>Question of the Day</Typography>
          <Grid  container  sx={{ borderBottom: "1px solid grey" }}>
            <Grid item xs={12} md={8}>
              <Typography variant={'body1'}>1. What is this?</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box >
                <RadioGroup sx={{ flexDirection: "row" }}>
                  <FormControlLabel sx={{ color: 'green', fontWeight: "bold" }} value="solved" control={<Radio sx={{
                    color: "green", '&.Mui-checked': { color: 'green' },
                  }} />} label="Solved" />
                  <FormControlLabel sx={{ color: '#b14949', fontWeight: "bold" }} value="unsolved" control={<Radio sx={{
                    color: "#b14949", '&.Mui-checked': { color: '#b14949' },
                  }} />} label="Unsolved" />
                  <FormControlLabel sx={{ color: '#666363', fontWeight: "bold" }} value="tried" control={<Radio sx={{
                    color: "#666363", '&.Mui-checked': { color: '#666363' },
                  }} />} label="Tried" />
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>
          <Button variant='contained' sx={{
            background: "purple", marginTop: '2rem', margin: " auto"
          }}> Submit</Button>
        </Container>
      </Dialog>
    </div>
  );
}
