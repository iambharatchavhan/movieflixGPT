import {useEffect}from "react";
import { useDispatch } from "react-redux";
import { addCastDetails } from "../utils/nowPlayingSlice";

const useCastDetails =(id,options)=>{
    const dispatch = useDispatch()
    const fetchTrailer = async () => {
        const json = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
          options
        );
        const cast = await json.json()
        dispatch(addCastDetails(cast))
      };
    
      useEffect(() => {
        fetchTrailer();
      }, [id,options]);

}

export default useCastDetails;