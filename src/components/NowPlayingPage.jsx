import React from 'react'
import { useSelector } from 'react-redux'
import AllMovieCard from './AllMovieCard'

const NowPlayingPage = () => {
  const movieList = useSelector(store => store.movies.nowPlayingMovie)

  return (
    <div className='test-xl text-red-700 flex justify-center items-center bg-black py-10'>
    <AllMovieCard title={"Playing Now 🎭"} movies={movieList}/>
  </div>
  )
}

export default NowPlayingPage
