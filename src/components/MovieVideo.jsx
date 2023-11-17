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
    <div className=' overflow-hidden flex flex-col lg:flex-row lg:justify-center lg:items-start lg:gap-4 lg:p-2 '>
    <iframe
    className="aspect-video  overflow-hidden w-full lg:w-[70%]"
    src={"https://www.youtube.com/embed/" + videoKey + "?autoplay=1&mute=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
   
  ></iframe>
  <div className=''>
  

  <div className='md:hidden lg:block lg:rounded-md lg:w-[390px] lg:overflow-hidden lg:shadow-[0_0px_5px_rgba(8,_112,_184,_0.7)] '>
 <img src={POSTER + poster_path
  } alt="sec-img" /> 
  </div>
 
  </div>
    </div>
    <div className='pl-10' >
    <div className='flex flex-col flex-wrap lg:gap-[4rem] md:flex-row'>
    <div className='p-2'>
    
    <h1 className='text-sm my-2 md:text-xl'>Movie Title: <span className='border-[1px] border-[#FFC107] text-[#FFC107] px-2 rounded-sm'>{original_title}</span></h1>
    <h1 className='text-sm md:text-xl'> Languages: {(spoken_languages && spoken_languages.map((lang)=>(
      <span  className='border-[1px] border-[#FFC107] text-[#FFC107] px-2 rounded-sm mx-2' key={lang.name}>{lang?.english_name ? lang?.english_name : lang.name }</span>
    )))}</h1>
    </div>
    
    <div className='p-2'>
    <p className='text-sm my-2 md:text-xl'>Status : <span className='text-sm  text-[#FFC107] border-[1px] border-[#FFC107] rounded-sm px-1 md:text-[16px]'>{status ? "On Screen Now" : "coming Soon"}</span> </p>
    <p className='text-sm my-2 md:text-xl'>Runtime : <span className='text-sm  text-[#FFC107] border-[1px] border-[#FFC107] rounded-sm px-1 md:text-[16px]'>{hrMn.hours }H {hrMn.minutes}m</span> </p>
  
    </div>
    </div>
    <div className='flex flex-wrap justify-start items-center gap-2 mb-4'>
    <p className='text-sm md:text-xl'>Production Companies : </p>
    {production_companies && (<div className='flex flex-wrap gap-2 '>
    {production_companies.map((logo)=>(
     (logo.name && <p key={logo.id} className='text-sm  text-[#FFC107] border-[1px] border-[#FFC107] rounded-sm px-2 md:text-lg'>{logo.name}</p>)
    ))}
    </div>)}
    </div>
    </div>
    </>

  )
}

export default MovieVideo
