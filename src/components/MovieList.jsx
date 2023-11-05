import React from 'react'
import MovieCard from './MovieCard';
import {ChevronRight} from 'lucide-react'



const MovieList = ({title,movies}) => {
    
// console.log(movies)
   
 

  return (
    <>
    {!movies && (<h1>Something Went wrong</h1>)}
<div className="p-2 bg-transparent z-50 md:relative md:px-6">
    <div className='flex justify-between  lg:p-2'>
    <h1 className='font-semibold text-sm md:text-xl'>{title}</h1>
    <ChevronRight className='cursor-pointer' />

    </div>
    
    <div className='flex flex-col overflow-x-scroll scroll-container'>
     
      <div className='flex gap-2 w-[600%] md:p-1 md:gap-3 md:w-[310%] lg:p-2 lg:gap-5 lg:w-[210%]'>
     
      {movies.map((movie,i)=>(
        <MovieCard key={i} props={movie}/>
    
      ))}
      
      </div>
    </div>
    </div>
    </>

  )

}

export default MovieList
