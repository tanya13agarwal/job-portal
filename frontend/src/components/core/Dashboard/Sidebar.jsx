import React , {useState} from 'react';
import {useSelector , useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {VscSignOut} from "react-icons/vsc";

import {sidebarLinks} from "../../../data/dashboard-links";
import {logout} from "../../../services/operations/authAPI";
import SidebarLink from './SidebarLinks';
import ConfirmationModal from '../../common/ConfirmationModal';
import { FaVideo } from "react-icons/fa";
import { ACCOUNT_TYPE } from '../../../utils/accoutnType';



function Sidebar() {

  const {user , loading : profileLoading} = useSelector((state) => state.profile);
  const {loading : authLoading} = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [confirmationModal , setConfirmationModal] = useState(null);

  const handleClick = () => {
    window.location.href = 'https://ai-mock-interview-sigma.vercel.app/';
  }

  if(profileLoading || authLoading) {
    return(
      <div className='mt-10'>
        Loading...
      </div>
    )
  }


  return (
    <div>
        <div className='flex min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 
        h-full bg-richblack-800 py-10'>
            
            <div className='flex flex-col'> 
                {
                    sidebarLinks.map((link) => {
                      if(link.type && user?.accountType !== link.type) {
                        return null;
                      }
                      return(
                        <SidebarLink key={link.id} link = {link} iconName = {link.icon}/>
                      )
                    })
                } 
                <button 
                  onClick={handleClick}
                  className={`${user?.accountType === ACCOUNT_TYPE.STUDENT ? "" : "hidden"} relative px-8 py-2 text-sm font-medium bg-opacity-0 text-richblack-300
                  transition-all duration-200`}
                >
                  <div className='flex items-center gap-x-2'>
                      {/* <Icon className="text-lg"/> */}
                      <FaVideo className="text-lg"/>
                      <span>Mock Interview</span>
                  </div>
                </button>
                
            </div>

            <div className='mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700'></div>

            <div className='flex flex-col'>
              <SidebarLink
                link={{name:"Settings" , path:"dashboard/settings"}}
                iconName="VscSettingsGear"
              />

              {/* LOGOUT walaa button */}

              <button
                onClick={ () => setConfirmationModal({
                  text1:"Are You Sure ?",
                  text2:"You will be logged out of your Account",
                  btn1Text: "Logout",
                  btn2Text: "Cancel",
                  btn1Handler: () => dispatch(logout(navigate)),
                  btn2Handler: () => setConfirmationModal(null),
                })}
                className='px-8 py-2 text-sm font-medium text-richblack-300'
                >

                <div className='flex items-center gap-x-2'>
                  <VscSignOut className='text-lg'/>
                  <span>Logout</span>
                </div>

              </button>

              

            </div>
        
        </div>
        {confirmationModal && <ConfirmationModal modalData = {confirmationModal}/>} {/*Logut waale button prr click krne ke baad waali window*/}
    </div>
  )
}

export default Sidebar