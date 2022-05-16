import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from '../Form';
import { borderRadius } from '@mui/system';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "20rem",
  bgcolor: 'rgba(0, 0, 0, 0) linear-gradient(90deg, rgb(229, 0, 255) 0%, rgb(130, 0, 255) 100%) repeat scroll 0% 0%',
//   border: '2px solid #000',
borderRadius: "6px",
  boxShadow: 24,
  p: 4,
  backdropfilter:" blur(200px)"
};

 function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
            <button className="btn-giveTest" onClick={handleOpen}>Give Test</button>
      <Modal
     

        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >

        <Box sx={style}>
    <Form/>
        </Box>
      </Modal>
    </div>
  );
}


export default KeepMountedModal