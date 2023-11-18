import {useEffect}from "react";
import { useDispatch } from "react-redux";
import { MOVIE_DETAILS_API } from "../utils/constant";
import { addMovieDetails} from "../utils/nowPlayingSlice";


const useMovieInformation =(id,options)=>{
    const dispatch = useDispatch()
    const fetchTrailer = async () => {
        const json = await fetch(
          MOVIE_DETAILS_API + id,
          options
        );
        const movieDetails = await json.json();
       
    
        dispatch(addMovieDetails(movieDetails))
      };
    
      useEffect(() => {
        fetchTrailer();
      }, [id,options]);

}

export default useMovieInformation;