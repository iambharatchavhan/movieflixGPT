import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondMovieContainer = () => {
  const movieList = useSelector(store => store.movies.nowPlayingMovie)
  // console.log(movieList)
  return (
    <>
   {movieList && <div className=' bg-black text-white lg:-mt-72'>
      <MovieList title={"Now Playing Movies"} movies={movieList}/>
      <MovieList title={"Popular"} movies={movieList}/>
      <MovieList title={"Upcoming"} movies={movieList}/>
      <MovieList title={"Top Rated"} movies={movieList}/>
    </div>} 
    </>
  )
 
}

export default SecondMovieContainer
