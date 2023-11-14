import React from 'react'
import { POSTER } from '../utils/constant';
import { Languages } from 'lucide-react';

const MovieVideo = ({videoKey,details}) => {
    // console.log(videoKey);
    const {
      
        original_title,
        status,
        production_companies,
        runtime,
        spoken_languages,
        poster_path,
      
      } = details;

      function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
      }
      const hrMn = toHoursAndMinutes(runtime) 

      
    
  return (
    <>
    <div className='flex justify-center items-start gap-4 p-2 overflow-hidden '>
    <iframe
    className="aspect-video w-[70%] overflow-hidden"
    src={"https://www.youtube.com/embed/" + videoKey + "?autoplay=1&mute=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
   
  ></iframe>
  <div className=''>
  

  <div className='rounded-md w-[390px] overflow-hidden shadow-[0_0px_5px_rgba(8,_112,_184,_0.7)] '>
 <img src={POSTER + poster_path
  } alt="sec-img"/> 
  </div>
 
  </div>
    </div>
    <div className='pl-10' >
    <div className='flex gap-[32rem]'>
    <div className='p-2'>
    <h1 className='text-xl my-2'>Movie Title: <span className='border-[1px] border-[#FFC107] text-[#FFC107] px-2 rounded-sm'>{original_title}</span></h1>
    <h1 className='text-xl'> Languages: {(spoken_languages && spoken_languages.map((lang)=>(
      <span  className='border-[1px] border-[#FFC107] text-[#FFC107] px-2 rounded-sm mx-2' key={lang.name}>{lang?.english_name ? lang?.english_name : lang.name }</span>
    )))}</h1>
    </div>
    
    <div className='p-2'>
    <p className='text-xl my-2'>Status : <span className='text-[16px] text-[#FFC107] border-[1px] border-[#FFC107] rounded-sm px-1'>{status ? "On Screen Now" : "coming Soon"}</span> </p>
    <p className='text-xl my-2'>Runtime : <span className='text-[16px] text-[#FFC107] border-[1px] border-[#FFC107] rounded-sm px-1'>{hrMn.hours }H {hrMn.minutes}m</span> </p>
  
    </div>
    </div>
    <div className='flex justify-start items-center gap-2'>
    <p className='text-xl'>Production Companies : </p>
    {production_companies && (<div className='flex flex-wrap gap-2 '>
    {production_companies.map((logo)=>(
     (logo.name && <p key={logo.id} className='text-[#FFC107] border-[1px] border-[#FFC107] rounded-sm px-2'>{logo.name}</p>)
    ))}
    </div>)}
    </div>
    </div>
    </>

  )
}

export default MovieVideo
