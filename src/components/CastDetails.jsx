import React from 'react'
import {UserCircle} from 'lucide-react'
import { POSTER } from '../utils/constant'

const CastDetails = ({cast}) => {
 if(!cast) return null
  
  return (
    <div className='p-10 flex flex-wrap gap-20'>
       {cast.map((worker,i)=>(
        <div className='border-2 border-[#FFC107] relative w-[290px] h-[65px] rounded-e-full flex flex-col justify-center items-start py-2 pl-10 left-8 bg-[#1c1c1c]' key={i}>
        <p>{worker.original_name
        }</p>
        <h1>As: <span className='text-[#FFC107]'>{ worker.character}</span> </h1>
       {worker.profile_path && <img src={POSTER + worker.profile_path} alt='' className='w-[70px] h-[70px] object-cover rounded-full border-[2px] border-[#FFC107] absolute left-[-2.5rem] bg-black'/>}
       {!worker.profile_path && <UserCircle 
          className='w-[70px] h-[70px] object-cover rounded-full border-[2px] border-[#FFC107] absolute left-[-2.5rem] bg-black text-[#FFC107]' />}
        </div>
       ))}
  



    
      
    </div>
  )
}

export default CastDetails
