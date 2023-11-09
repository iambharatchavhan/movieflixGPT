import React from 'react'

import { useSelector } from 'react-redux'
import AllMovieCard from './AllMovieCard'
const PopularPage = () => {
  const popularMovies = useSelector(store => store.movies.popularMovies)
  return (
    <div className='test-xl text-red-700'>
      <AllMovieCard movies={popularMovies}/>
    </div>
  )
}

export default PopularPage
