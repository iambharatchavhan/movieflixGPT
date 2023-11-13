import React from 'react'
import { useSelector } from 'react-redux'
import AllMovieCard from './AllMovieCard'

const UpComingPage = () => {
  const upcomingMoviesList = useSelector(store => store.movies.upcomingMovies)


  return (
    <div className='test-xl text-red-700 flex justify-center items-center bg-black py-10'>
      <AllMovieCard title={"Coming Soon ✨"} movies={upcomingMoviesList}/>
    </div>
  )
}

export default UpComingPage
