import React from 'react'
import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import Sidebar from '../components/core/Dashboard/Sidebar';

function Dashboard() {

    const {loading : authLoading} = useSelector( (state) => state.auth );//loading call kiyaa auth waala and renamed it
    const {loading : profileLoading} = useSelector( (state) => state.profile );//loading call kiyaa profile waala and renamed it

    if(authLoading || profileLoading) {
        return (
            <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
                Loading...
            </div>
        )
    }


  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
        <Sidebar/>
        <div className='min-h-[calc(100vh-3.5rem)] flex-1 overflow-auto'>
            <div className='mx-auto w-11/12 max-w-[1000px] py-10'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard