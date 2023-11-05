import { useState, useEffect } from 'react';
import {API_URL,API_OPTIONS} from "../utils/constant"
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/nowPlayingSlice';


const useApiFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL,API_OPTIONS);
        if (!response.ok) {
          throw new Error(`Something Went wrong" + ${API_URL}`);
        }
        const jsonData = await response.json();
        setData(jsonData.results);
        dispatch(addNowPlayingMovies(jsonData.results))
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useApiFetch;
