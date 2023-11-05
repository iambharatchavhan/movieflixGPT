import { useState, useEffect } from 'react';
import {POPULAR_API,API_OPTIONS} from "../utils/constant"
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/nowPlayingSlice';


const usePopularMovies = () => {
  const [popularData, setPopularData] = useState(null);
  const [isLoadingPopular, setIsLoadingPopular] = useState(true);
  const [errorPopular, setErrorPopular] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(POPULAR_API,API_OPTIONS);
        if (!response.ok) {
          throw new Error(`Something Went wrong" + ${POPULAR_API}`);
        }
        const jsonData = await response.json();
        setPopularData(jsonData.results);
        dispatch(addPopularMovies(jsonData.results))
        setIsLoadingPopular(false);
      } catch (err) {
        setErrorPopular(err);
        setIsLoadingPopular(false);
      }
    };

    fetchData();
  }, []);

  return {popularData,isLoadingPopular, errorPopular};
};

export default usePopularMovies;
