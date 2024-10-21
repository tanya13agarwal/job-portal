import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

// import SupportDialog from "@/components/hero/components/common/SupportDialog";
import SupportDialog from '../components/common/SupportDialog';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const [supportDialog, setSupportDialog] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLeavePage = () => {
    navigate("/employers-dashboard");
    setModalOpen(false);
  };

    const handleSupport = () => {
      setSupportDialog(prev => !prev);
    }

  return (
    <header className="fixed-headerr">
      <div className="nav-outer">
        <div className="logo-box">
          <button
            onClick={handleOpenModal}
            style={{
              margin: "8px",
              color: "black",
              fontSize: "20px",
              gap: "10px",
              display: "flex ",
              flexDirection: "row",
              justifyContent: "center",
            }}
            to={"/employers-dashboard"}
            className="logo"
          >
            <i className="fas fa-arrow-left"></i>
            Post a new job
          </button>
        </div>
      </div>


      <div className="outer-box flex items-center gap-4">

        {/* Support */}
        <button className="log" onClick={()=>setSupportDialog(prev => !prev)}>
          <div className="flex w-full text-xl text-gray-500 gap-2 items-center hover:bg-gray-100 px-2 py-1.5 rounded">
            <BsFillQuestionCircleFill/>
            <p className="text-lg font-medium">Support</p>
          </div> 
        </button>
        {supportDialog && <SupportDialog isOpen={supportDialog} onClose={()=>setSupportDialog(false)}/>}
          
        {/* Leave Page */}

        <button className="logo">
          <i
            style={{ margin: "10px" }}
            className="fas fa-times"
            onClick={handleOpenModal}
          ></i>
        </button>
      </div>
        

      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={isModalOpen}
        onClose={handleCloseModal}
        className="w-[32rem] ml-[28rem]"
      >
        <DialogTitle sx={{ m: 0, px: 3, py:2 }} id="customized-dialog-title">
          Are you sure?
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
        <div className="flex px-2 py-1">
          <div className="w-[60%] bg-[#722ed1] p-2">
            <p className="text-white">Get <b>flat ₹300 OFF</b> on your first job post  🎉</p>
          </div>
          <div className="flex flex-row items-center gap-2 w-[40%] p-2 bg-[#f1eafa]">
            <MdOutlineTimer/>
            <div className="flex flex-col">
              <p className="text-black">Valid for</p>
              <p className="text-black"><b>24 Hours</b></p>
            </div>
          </div>
        </div>
          <p className="p-2 text-gray-800">
            You are just 1 step away from getting candidates for this job! You
            will lose any unsaved changes if you leave this page.
          </p>
        </DialogContent>
        <DialogActions className="flex gap-2 m-3">
          <button className='py-2 px-4 border font-medium rounded border-gray-700 text-black' onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="py-2 px-3 border font-medium rounded bg-red-600 text-white" onClick={handleLeavePage}>
            Leave Page
          </button>
        </DialogActions>
      </BootstrapDialog>
    </header>
  );
};

export default Header;