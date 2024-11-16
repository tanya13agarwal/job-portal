import React from 'react'
import ResumeTemplate from './resumeTemplate'

const Resume = () => {
  return (
    <div className='flex items-center flex-col gap-10'>
        <div className='text-4xl'>Resume Toolkit</div>
        <ResumeTemplate/>
    </div>
  )
}

export default Resume