import React,{useEffect,useState} from "react";
import { IMG_LOGO } from "../Assets/constants";
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useDispatch} from "react-redux"
import {addUser,removeUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import LogoutPopup from './LogoutPopup';
import { ChevronDown } from 'lucide-react';
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{

  const Unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const {uid,email,displayName} = user;
       dispatch(addUser({uid:uid, email:email,displayName:displayName}) )
       navigate("/brows")
    } else {
      // User is signed out
     dispatch(removeUser())
     navigate("/")
    }
  });

  return () => Unsubscribe();
  },[])


  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector(store => store.user);

  const containerClass = isHovered
    ? 'absolute z-50 right-5 top-2 flex flex-col justify-center items-center gap-4 p-1 rounded-xl bg-[#1c1c1c] w-[25%] h-42 cursor-pointer overflow-hidden md:w-[20%] md:top-4 lg:w-[12%]'
    : 'absolute z-50 right-5 top-2 flex flex-col justify-center items-center gap-4 p-1 rounded-xl bg-[#1c1c1c] w-[25%] h-10 cursor-pointer overflow-hidden md:w-[20%] md:top-4 lg:w-[12%]';


  return (

    
  <>
    <div className="absolute z-20 flex justify-between bg-transparent">
      <img
        src={IMG_LOGO}
        alt=""
        className="w-1/3 p-4 md:w-1/5 lg:w-[15%] lg:p-6"
      />
    </div>
    { user && <div
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
      </div>}
   
    </>
  )};

export default Header;
