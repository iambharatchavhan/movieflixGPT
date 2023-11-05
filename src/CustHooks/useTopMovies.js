import { useState, useEffect } from 'react';
import {UPCOMING_API,API_OPTIONS} from "../utils/constant"
import { useDispatch } from 'react-redux';
import { addTopMovies } from '../utils/nowPlayingSlice';


const useTopMovies = () => {
  const [topMoviesData, setTopMoviesData] = useState(null);
  const [isLoadingTop, setIsLoadingTop] = useState(true);
  const [errorTop, setErrorTop] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(UPCOMING_API,API_OPTIONS);
        if (!response.ok) {
          throw new Error(`Something Went wrong" + ${UPCOMING_API}`);
        }
        const jsonData = await response.json();
        setTopMoviesData(jsonData.results);
        dispatch(addTopMovies(jsonData.results))
        setIsLoadingTop(false);
      } catch (err) {
        setErrorTop(err);
        setIsLoadingTop(false);
      }
    };

    fetchData();
  }, []);

  return {topMoviesData,isLoadingTop, errorTop};
};

export default useTopMovies;
