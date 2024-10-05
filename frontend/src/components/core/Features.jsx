import React, { useState } from 'react';
import Card from '../common/Card';
import Tab from "../core/Auth/Tab";
import { ACCOUNT_TYPE } from '../../utils/accoutnType';


export const Features = () => {

    // const [accountType , setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
    const [isStudent , setIsStudent] = useState("Student");


    const tabData = [
        {
            id : 1,
            tabName : "Student",
            type : ACCOUNT_TYPE.STUDENT,
        },
        {
            id : 2,
            tabName : "Admin",
            type : ACCOUNT_TYPE.ADMIN,
        },
    ]

  return (
    <div className='flex flex-col p-10 items-center gap-4'>

        <div className='flex items-center justify-center mb-10 text-4xl '>
            Features
        </div>

        <Tab
            className = "w-[20%] flex items-center justify-between"
            tabData={tabData} 
            field={isStudent} 
            setField={setIsStudent}
        />

        <div className={`${isStudent === "Student" ? "" : "hidden"} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between`}>
            <Card
                image = ""
                heading = "Hello World" 
                para = "How are you? You want some come get somme" 
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello World" 
                para = "How are you? You want some come get somme"
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello World" 
                para = "How are you? You want some come get somme"
                link = "/"
            />

            <Card
                image = ""
                heading = "Hello World" 
                para = "How are you? You want some come get somme" 
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello World" 
                para = "How are you? You want some come get somme"
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello World" 
                para = "How are you? You want some come get somme"
                link = "/"
            />
        </div>

        <div className={`${isStudent === "Admin" ? "" : "hidden"} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 col-span-1 gap-10 justify-between`}>
            <Card
                image = ""
                heading = "Hello Universe" 
                para = "How are you? You want some come get somme" 
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello Universe" 
                para = "How are you? You want some come get somme"
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello Universe" 
                para = "How are you? You want some come get somme"
                link = "/"
            />

            <Card
                image = ""
                heading = "Hello Universe" 
                para = "How are you? You want some come get somme" 
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello Universe" 
                para = "How are you? You want some come get somme"
                link = "/"
            />
            <Card
                image = ""
                heading = "Hello Universe" 
                para = "How are you? You want some come get somme"
                link = "/"
            />
        </div>
    </div>
  )
}
