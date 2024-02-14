import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import image from "../assets/popup_oeh.png"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow:1,
  p: 4,
};

export default function Popup() {

    
const popup = useSelector((state)=>state.popup.showPopup)
  
  return (
    <div>
      <Modal
        open={popup}
        
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="pop_immh">
      <img src={image} />
      </div>
        </Box>
      </Modal>
    </div>
  );
}