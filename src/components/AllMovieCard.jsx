import React from 'react'
import MovieCard from './MovieCard'
import { MoveLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'



const AllMovieCard = ({movies,title}) => {
  const navigate = useNavigate()
  const handlePageNavigate = ()=>{
     navigate("/brows")
  }

    if(!movies) return null
  return (
    <div>
    <h1 className=' text-right p-2 font-semibold text-white -mt-8 mr-10'>{title}</h1>
    <div className='flex flex-wrap gap-2 justify-start items-center bg-black px-2 py-2  md:pl-16 lg:px-8 '>
   
    <div className=" absolute z-50 right-28 left-0 top-3 md:right-48 md:left-16 md:top-5 lg:left-8 lg:top-2 " onClick={handlePageNavigate}>
    <a href="#_" className="relative inline-flex items-center justify-center p-2 px-3 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out shadow-md group md:p-1 md:px-4 md:py-1 rounded-md  md:border-[1px] md:border-[#f47f7f90]  lg:p-4 lg:px-6 lg:py-2">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1C1C1C] group-hover:translate-x-0 ease">
   {  <MoveLeft strokeWidth={1} />}
    </span>
    <span className="absolute flex items-center justify-center w-full h-full text-white text-[10px] transition-all duration-300 transform group-hover:translate-x-full ease md:text-[13px] lg:text-[16px]">Homepage</span>
    <span className="relative invisible">GPT Search</span>
  </a>
    </div>
  
    {movies.map((movie,i)=>(
        <MovieCard key={movie.id} props={movie}/>
      ))}
    </div>
    </div>
  )
}

export default AllMovieCard
