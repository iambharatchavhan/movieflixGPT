import React from 'react'
import { useSelector } from 'react-redux'
import AllMovieCard from './AllMovieCard'
const PopularPage = () => {
  const popularMovies = useSelector(store => store.movies.popularMovies)
  return (
    <div className='test-xl text-red-700 flex justify-center items-center bg-black py-10'>
      <AllMovieCard title={"All time Popular 😎"} movies={popularMovies}/>
    </div>
  )
}

export default PopularPage
