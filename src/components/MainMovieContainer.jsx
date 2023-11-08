import React from "react";
import Trailer from "./Trailer";
import TrailerInfo from "./TrailerInfo";
import { useSelector } from "react-redux";

const MainMovieContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!movie){return}

  const trailerMovie = movie[0];
  const {poster_path,overview,id} = trailerMovie;
  // console.log(trailerMovie)

  return (
    <div className="overflow-x-hidden -mt-7">
      <Trailer id={id} />
      <TrailerInfo  title={poster_path} overview={overview} />
    </div>
  );
};

export default MainMovieContainer;
