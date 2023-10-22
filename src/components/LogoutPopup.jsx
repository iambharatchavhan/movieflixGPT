import React from 'react'
import {Settings,Power } from "lucide-react"
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"

const LogoutPopup = () => {
  const navigate = useNavigate()

  const handleSignOut = () =>{
  
 signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
  return (
    <div className='flex flex-col justify-center gap-5 items-center w-[100%] h-28 bg-[#1c1c1c] rounded-b-md lg:pl-3 '>
  <div className=' items-center gap-2 p-2 text-white md:w-full md:flex md:justify-start' ><Settings strokeWidth={1} /><p className='hidden md:block '>Settings</p>
  
  </div>
 
  <div className='items-center gap-2 p-2 cursor-pointer text-white md:w-full md:flex md:justify-start ' onClick={handleSignOut} ><Power strokeWidth={1} /><p className='hidden md:block'>Logout</p></div>
    </div>
  )
}


export default LogoutPopup
