import React  from 'react';
import Header from './Header';
import useApiFetch from '../utils/useFetchApi';
import {API_URL,API_OPTIONS } from '../utils/constant'
import MainMovieContainer from './MainMovieContainer';
import { useDispatch} from 'react-redux';
import { addNowPlayingMovies } from "../utils/nowPlayingSlice"
import SecondMovieContainer from './SecondMovieContainer';
import Error from "./Error"




const Brows = () => {
  const dispatch = useDispatch()
  const {data, isLoading, error } = useApiFetch(API_URL,API_OPTIONS)
  dispatch(addNowPlayingMovies(data?.results))
  
  
 
  return (
  
   <div className='bg-black h-screen'>
      <Header />
      {error && (<Error/>)}
      {isLoading && (<h1>Loading.....</h1>)}  
      {data &&(<div className='w-full'>
      <MainMovieContainer/>
     <SecondMovieContainer/>
      </div>) }
    </div>
  );
};

export default Brows;
