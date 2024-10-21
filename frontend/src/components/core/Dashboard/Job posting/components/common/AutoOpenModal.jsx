import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

const AutoOpenModal = ({ open, handleClose }) => {
  return (

    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="auto-open-modal-title"
      aria-describedby="auto-open-modal-description"
    >
      <DialogContent className="flex items-center gap-2">
        {/* <CreateRoundedIcon style={{ color: 'blue' }} /> */}
        <div>
          <h2 className="font-semibold text-lg my-3">Review & Edit</h2>
          <p className='text-center text-lg'>You can now review and edit your job postings from here.</p>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleClose} className='bg-[#1967d2] text-lg px-4 py-2 rounded text-white m-3'>
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default AutoOpenModal;