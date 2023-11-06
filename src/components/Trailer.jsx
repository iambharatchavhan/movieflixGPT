import React, {} from "react";
import { API_OPTIONS } from "../utils/constant";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../CustHooks/useMovieTrailer";

const Trailer = ({ id }) => {

  const trailerKey = useSelector((store) => store?.movies?.movieTrailer?.key);
  useMovieTrailer(id, API_OPTIONS);
  // console.log(trailerKey);
  
  return (
    <div className="relative w-[100%] pb-[9rem] border-2 border-red-900 md:pb-[20rem] lg:pb-[40rem]">
    
      <iframe
        className="absolute top-0 left-0 w-[100%] h-[100%] border-0"
        src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
       
      ></iframe>
    </div>
  );
};

export default Trailer;
