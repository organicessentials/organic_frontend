import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import image from "../assets/popup_2.png";
import close from "../assets/close.svg";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'transparent',
  border: 'none',
  boxShadow: 1,
  p: 0,
};

const POPUP_STORAGE_KEY = 'popupShown';

const Popup = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const popupShown = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (popupShown === 'false') {
      setOpen(false);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(POPUP_STORAGE_KEY, 'false');
    setTimeout(() => {
      sessionStorage.setItem(POPUP_STORAGE_KEY, 'true');
    }, 24 * 60 * 60 * 1000); // Set to true after 1 day
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-modal-title"
        aria-describedby="popup-modal-description"
      >
        <Box sx={style}>
          <div className="pop_immh">
            <img src={image} alt="Popup Image" />
            <button onClick={handleClose}> <img src={close} alt="Close" /></button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
