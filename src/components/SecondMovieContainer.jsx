import React from 'react'
import {useSelector} from 'react-redux'
import MovieList from './MovieList'

const SecondMovieContainer = () => {
  const movieList = useSelector(store => store.movies.nowPlayingMovie)
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const topMoviesList = useSelector(store => store.movies.topMovies)
  const upcomingMoviesList = useSelector(store => store.movies.upcomingMovies)



  //  console.log("now",topMoviesList);
  //  console.log("popular",upcomingMoviesList);
  return (
    <>
    <div className=' bg-black text-white mt-14 lg:-mt-64'>
  {upcomingMoviesList && (<MovieList title={"Upcoming Movies"} move={"upcoming"} movies={upcomingMoviesList}/>)}
  {movieList && (<MovieList title={"Now Playing Movies"} move={"nowplaying"} movies={movieList}/>)}
  {topMoviesList && (<MovieList title={"Top Rated Movies"} move={"top"} movies={topMoviesList}/>)}
  {popularMovies && (<MovieList title={"Popular Movies"} move={"popular"} movies={popularMovies}/>)}  
    </div>
    </>
  )
 
}

export default SecondMovieContainer
