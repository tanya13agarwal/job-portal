import React from 'react';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { SiImessage } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdOutlineDownload, MdOpenInNew } from "react-icons/md";
import { useMediaQuery } from '@mui/material';

const SupportDialog = ({ isOpen, onClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:768px)'); // Define the breakpoint for small to medium screens

  if (!isOpen) return null;

  const handleChat = () => {
    // Handle chat click
  }

  const handleWhatsapp = () => {
    // Handle WhatsApp click
  }

  const handleSchedule = () => {
    // Handle schedule click
  }

  const handleBestPractices = () => {
    // Handle best practices click
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex ${isSmallScreen ? 'items-end' : 'items-center justify-center'}`}
    >
      <div className={`absolute inset-0 bg-black opacity-50 ${isSmallScreen ? '' : 'hidden'}`}></div>
      <div
        className={`bg-white sm:translate-x-[60%] md:-translate-y-[65%] md:translate-x-[70%] lg:-translate-y-[48%] lg:translate-x-[220%] w-full sm:w-auto sm:max-w-xs rounded-lg px-3 py-2 relative z-10 shadow-lg transition-transform transform ${isSmallScreen ? 'translate-y-0' : 'translate-y-[100%]'} ${isSmallScreen ? 'fixed bottom-0' : ''}`}
      >
        <div className="space-y-2">
          <div>
            <button className='flex gap-2 items-center text-gray-500 w-full hover:bg-gray-100 p-2 rounded'>
              <BsFillQuestionCircleFill className='text-lg' />
              <p className='text-lg'>FAQs</p>
            </button>
          </div>

          <div className='w-full h-[2px] bg-gray-200'></div>

          <div>
            <p className="font-semibold text-black">Contact us</p>
            <p className="text-sm text-gray-500">(Mon to Sun | 9:00 AM - 7:00 PM)</p>
          </div>

          <div className='flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded' onClick={handleChat}>
            <SiImessage className='text-xl text-gray-500' />
            <p className='text-md'>Chat with us</p>
          </div>
          <div className='flex flex-col hover:bg-gray-100 px-2 py-1.5 rounded' onClick={handleWhatsapp}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <FaWhatsapp className='text-xl text-gray-500' />
                <p className='text-md'>Chat on Whatsapp</p>
              </div>
              <MdOpenInNew className='text-xl' />
            </div>
            <div className='ml-5 text-sm px-2 py-0.5 bg-blue-100 text-blue-600 font-semibold rounded-lg w-fit'>Recommended</div>
          </div>

          <div className='flex items-center justify-between gap-2 hover:bg-gray-100 px-2 py-1.5 rounded' onClick={handleSchedule}>
            <div className='flex items-center gap-2'>
              <RiCalendarScheduleFill className='text-xl text-gray-500' />
              <p className='text-md'>Schedule Training</p>
            </div>
            <MdOpenInNew className='text-xl' />
          </div>

          <div className='flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded' onClick={handleBestPractices}>
            <MdOutlineDownload className='text-xl text-gray-500' />
            <p className='text-md'>HR best practices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportDialog;