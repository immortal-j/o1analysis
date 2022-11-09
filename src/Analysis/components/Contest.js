import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ContestData from './ContestData';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   //   width: 400,
//   height: "100%",
//   width: "80%",
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   // overflowY:"auto",
//   overflow: "scroll",
//   overflowX:"hidden",
//   p: 4,
// };

export default function Contest({ openContest, handleCloseContest, handleOpenContest }) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      {/* <Modal
        open={openContest}
        onClose={handleCloseContest}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContestData />
        </Box>
      </Modal> */}



      <Dialog
        maxWidth="xl"
        open={openContest}
        onClose={handleCloseContest}
        aria-labelledby="responsive-dialog-title"
      >
       <ContestData/>
      </Dialog>
    </div>
  );
}
