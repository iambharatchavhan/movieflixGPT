import React from 'react'
import {UserCircle,Settings,Power } from "lucide-react"

const LogoutPopup = () => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center w-[100%] h-28 bg-[#1c1c1c] rounded-b-md lg:pl-3 '>
  <div className=' items-center gap-2 p-2 text-white md:w-full md:flex md:justify-start' ><Settings strokeWidth={1} /><p className='hidden md:block '>Settings</p>
  
  </div>
 
  <div className='md:w-full md:flex md:justify-start items-center gap-2 p-2 text-white' ><Power strokeWidth={1} /><p className='hidden md:block'>Logout</p></div>
    </div>
  )
}


export default LogoutPopup
