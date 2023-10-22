import React, { useState } from 'react';
import Header from './Header';
import LogoutPopup from './LogoutPopup';
import { UserCircle, ChevronDown } from 'lucide-react';
import { useSelector } from "react-redux";

const Brows = () => {
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector(store => store.user);

  const containerClass = isHovered
    ? 'absolute z-50 right-5 top-2 flex flex-col justify-center items-center gap-4 p-1 rounded-xl bg-[#1c1c1c] w-[25%] h-42 cursor-pointer overflow-hidden md:w-[20%] md:top-4 lg:w-[12%]'
    : 'absolute z-50 right-5 top-2 flex flex-col justify-center items-center gap-4 p-1 rounded-xl bg-[#1c1c1c] w-[25%] h-10 cursor-pointer overflow-hidden md:w-[20%] md:top-4 lg:w-[12%]';

  return (
    <div className='bg-black h-screen'>
      <Header />
      <div
        className={containerClass}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center gap-5 p-2 md:gap-2">
          <UserCircle strokeWidth={1} className="text-white text-sm md:text-xl" />
          <p className="text-white flex justify-center items-center gap-1 hidden md:block">
            {user?.displayName}
          </p>
          <ChevronDown strokeWidth={1} className='text-white' />
        </div>
        {isHovered && <LogoutPopup />}
      </div>
    </div>
  );
};

export default Brows;
