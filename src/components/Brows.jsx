import React  from 'react';
import Header from './Header';
import MainMovieContainer from './MainMovieContainer';
import SecondMovieContainer from './SecondMovieContainer';
import useApiFetch from '../CustHooks/useFetchApi'
import usePopularMovies from '../CustHooks/usePopularMovies';
import useUpcomingMovies from '../CustHooks/useUpcomingMovies';
import useTopMovies from '../CustHooks/useTopMovies';
import GPTsearchPage from './GPTsearchPage';
import { useSelector} from 'react-redux';




const Brows = () => {
   useApiFetch();
   usePopularMovies();
   useTopMovies();
   useUpcomingMovies();
  const gptPageToggle = useSelector(store => store.gptToggle.gptToggle)

  return (
  
   <div className='bg-black h-screen'>
      <Header />
      {gptPageToggle && <GPTsearchPage/>}
      {!gptPageToggle && <div className='w-full'>
      <MainMovieContainer/>
     <SecondMovieContainer/>
      </div>}
    </div>
  );
};

export default Brows;
