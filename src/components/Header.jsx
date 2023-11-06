import React,{useEffect,useState} from "react";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { ChevronDown,MoveRight,MoveLeft} from 'lucide-react';
import { useSelector } from "react-redux";
import LogoutPopup from './LogoutPopup';
import {addUser,removeUser} from "../utils/userSlice"
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { IMG_LOGO } from "../Assets/constants";
import { gptToggleButton } from "../utils/gptToggleSlice";








const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector(store => store.user);
  const gptPageToggle = useSelector(store => store.gptToggle.gptToggle)

  // console.log(user)

  

  useEffect(()=>{

  const Unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const {uid,email,displayName,photoURL} = user;
       dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}) )
       navigate("/brows")
    } else {
      // User is signed out
     dispatch(removeUser())
     navigate("/")
    }
  });

  return () => Unsubscribe();
  },[])

  const handleGptPageToggle =()=>{
    dispatch(gptToggleButton())
  }

  

  const containerClass = isHovered
    ? 'absolute z-30 right-5 top-2 flex flex-col justify-center items-center gap-4 p-1 rounded-xl bg-[#1c1c1c] w-[25%] h-42 cursor-pointer overflow-hidden md:w-[20%] md:top-4 lg:w-[12%]'
    : 'absolute z-30 right-5 top-2 flex flex-col justify-center items-center gap-4 p-1 rounded-xl bg-[#1c1c1c] w-[25%] h-10 cursor-pointer overflow-hidden md:w-[20%] md:top-4 lg:w-[12%]';


  return (

    
  <>
    <div className="absolute z-20 flex justify-between bg-transparent">
      <img
        src={IMG_LOGO}
        alt=""
        className="w-1/3 p-4 md:w-1/5 lg:w-[15%] lg:p-6"
      />
    </div>
      { user && <>
        <div className=" absolute right-56 top-4 z-50" onClick={handleGptPageToggle}>
        <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-[1px] border-[#b9b9b990] rounded-md shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1C1C1C] group-hover:translate-x-0 ease">
       { !gptPageToggle ? <MoveRight strokeWidth={1} /> : <MoveLeft strokeWidth={1} />}
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease"> {!gptPageToggle ? "GPT Search" : "Home"}</span>
        <span className="relative invisible">GPT Search</span>
      </a>
        </div>h

        <div
        className={containerClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center gap-5 p-2 md:gap-2">
          <img src={user?.photoURL} alt="avatar"  className='w-6'/>
          <p className="text-white flex justify-center items-center gap-1 hidden md:block">
            {user?.displayName}
          </p>
          <ChevronDown strokeWidth={1} className='text-white' />
        </div>
        {isHovered && <LogoutPopup />}
      </div></>}
   
    </>
  )};

export default Header;
