import React from 'react'
import AllMovieCard from './AllMovieCard'
import { useSelector } from 'react-redux'

const TopPage = () => {

  const topMoviesList = useSelector(store => store.movies.topMovies)


  return (
    <div className='test-xl text-red-700 flex justify-center items-center bg-black py-10'>
      <AllMovieCard title={"Top Rated Of This Week 🍅🌟"} movies={topMoviesList}/>
    </div>
  )
}

export default TopPage
