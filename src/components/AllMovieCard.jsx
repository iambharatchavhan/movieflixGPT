import React from 'react'
import MovieCard from './MovieCard'
const AllMovieCard = ({movies}) => {
    if(!movies) return null
  return (
    <div className='flex flex-wrap gap-2 justify-start items-center bg-black px-8 py-5'>
    {movies.map((movie,i)=>(
        <MovieCard key={i} props={movie}/>
      ))}
    </div>
  )
}

export default AllMovieCard
