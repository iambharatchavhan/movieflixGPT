import React ,{useEffect}from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/nowPlayingSlice";

const useMovieTrailer =(id,options)=>{
    const dispatch = useDispatch()
    const fetchTrailer = async () => {
        const json = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await json.json();
    
        const filteredData = data.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filteredData.length ? filteredData[0] : data.results[0];
        dispatch(addMovieTrailer(trailer))
      };
    
      useEffect(() => {
        fetchTrailer();
      }, [id,options]);

}

export default useMovieTrailer;