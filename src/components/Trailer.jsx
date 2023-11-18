import React, {} from "react";
import { API_OPTIONS } from "../utils/constant";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../CustHooks/useMovieTrailer";

const Trailer = ({ id }) => {

  const trailerKey = useSelector((store) => store?.movies?.movieTrailer?.key);
  useMovieTrailer(id, API_OPTIONS);
  
  return (
    <div className="relative w-[100%] pb-[56.25%] overflow-hidden">
    <div className="absolute   top-0 left-0 right-24 w-[100%] h-[100%] border-0 ">
      <iframe
        className="absolute top-0 lef-0 w-[100%] h-[100%] object-fill scale-[1.4]"
        src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
       
      ></iframe>
      </div>
    </div>
  );
};

export default Trailer;
