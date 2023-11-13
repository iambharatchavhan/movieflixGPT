import React from 'react'
import MovieCard from './MovieCard';
import {ChevronRight} from 'lucide-react'
import {useNavigate } from 'react-router-dom';




const MovieList = ({title,movies,move}) => {
const navigate = useNavigate()
 const handleMoviesPage =()=>{
   navigate("/brows/" + move)

 }
 
 

  return (
    <>
    {!movies && (<h1>Something Went wrong</h1>)}
<div className="p-2 bg-transparent z-50 md:relative md:px-6 -mt-6 md:-mt-12 lg:-mt-28">
    <div className='flex justify-between  lg:p-2'>
    <h1 className='font-semibold text-sm md:text-xl'>{title}</h1>
     <ChevronRight className='cursor-pointer' onClick={handleMoviesPage}/>

    </div>
    
    <div className='flex flex-col overflow-x-scroll scroll-container'>
     
      <div className='flex gap-2 w-[600%] md:p-1 md:gap-3 md:w-[310%] lg:p-2 lg:gap-5 lg:w-[210%]'>
     
      {movies.map((movie,i)=>(
        <MovieCard key={movie.id} props={movie}/>
    
      ))}
      
      </div>
    </div>
    </div>
    </>

  )

}

export default MovieList
