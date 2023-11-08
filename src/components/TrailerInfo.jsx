import React from 'react'
import {Play,AlertCircle } from 'lucide-react'
import { POSTER } from '../utils/constant'

const TrailerInfo = ({title,overview}) => {
  return (
    <div className='w-full aspect-video text-white  absolute top-0 bg-gradient-to-r bg-[#000] bg-opacity-40 '>
    <div className='absolute px-4 top-14 md:top-52 lg:top-72 lg:left-10 lg:px-1'>
     <img src={POSTER+title} alt="poster" className=' object-cover rounded-full w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]'/>
    <p className='w-60 text-[10px] md:text-[12px] md:w-1/2 lg:text-lg '>{overview.slice(0,110)}...</p>
    <div className='flex gap-2'>
    <button className='bg-[#f7f7f7e7] flex justify-center items-center px-1 text-sm gap-1 rounded-lg text-[#000000] lg:px-4 lg:py-1 lg:text-lg  '><Play size={20} />Play</button>
    <button className='bg-[#606060b1] flex justify-center items-center gap-2 px-1 py-1 rounded-lg text-sm text-[#fff]  lg:px-4 lg:py-1 lg:text-lg '><AlertCircle size={20} /> More info</button>
    </div>
    </div>
    </div>
  )
}

export default TrailerInfo
