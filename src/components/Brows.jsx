import React  from 'react';
import Header from './Header';
import MainMovieContainer from './MainMovieContainer';
import SecondMovieContainer from './SecondMovieContainer';
import useApiFetch from '../CustHooks/useFetchApi'
import usePopularMovies from '../CustHooks/usePopularMovies';
import useUpcomingMovies from '../CustHooks/useUpcomingMovies';
import useTopMovies from '../CustHooks/useTopMovies';





const Brows = () => {
  const {data, isLoading,error} = useApiFetch();
  const {popularData,isLoadingPopular,errorPopular} = usePopularMovies();
  const {topMoviesData} = useTopMovies();
  const {upcomingData} = useUpcomingMovies();
  return (
  
   <div className='bg-black h-screen'>
      <Header />
      <div className='w-full'>
      <MainMovieContainer/>
     <SecondMovieContainer/>
      </div>
    </div>
  );
};

export default Brows;
