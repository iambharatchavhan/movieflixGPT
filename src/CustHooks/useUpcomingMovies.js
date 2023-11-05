import { useState, useEffect } from 'react';
import {UPCOMING_API,API_OPTIONS} from "../utils/constant"
import { useDispatch } from 'react-redux';
import { addUpComingMovies } from '../utils/nowPlayingSlice';


const useUpcomingMovies = () => {
  const [upcomingData, setUpcomingData] = useState(null);
  const [isLoadingUpcoming, setIsLoadingUpcoming] = useState(true);
  const [errorUpcoming, setErrorUpcoming] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(UPCOMING_API,API_OPTIONS);
        if (!response.ok) {
          throw new Error(`Something Went wrong" + ${UPCOMING_API}`);
        }
        const jsonData = await response.json();
        setUpcomingData(jsonData.results);
        dispatch(addUpComingMovies(jsonData.results))
        setIsLoadingUpcoming(false);
      } catch (err) {
        setErrorUpcoming(err);
        setIsLoadingUpcoming(false);
      }
    };

    fetchData();
  }, []);

  return {upcomingData,isLoadingUpcoming, errorUpcoming};
};

export default useUpcomingMovies;
