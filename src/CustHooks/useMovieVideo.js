import {useEffect}from "react";
import { useDispatch } from "react-redux";
import { addMovieVideo} from "../utils/nowPlayingSlice";

const useMovieVideo =(id,options)=>{
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
        const movieVideo = filteredData.length ? filteredData[0] : data.results[0];
        dispatch(addMovieVideo(movieVideo))
      };
    
      useEffect(() => {
        fetchTrailer();
      }, [id,options]);

}

export default useMovieVideo;