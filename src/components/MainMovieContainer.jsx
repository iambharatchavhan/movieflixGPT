import React from "react";
import Trailer from "./Trailer";
import TrailerInfo from "./TrailerInfo";
import { useSelector } from "react-redux";

const MainMovieContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!movie){return}

  const trailerMovie = movie[0];
  const {original_title,overview,id} = trailerMovie;
  // console.log(trailerMovie)

  return (
    <div className="overflow-x-hidden">
      <Trailer id={id} />
      <TrailerInfo  title={original_title} overview={overview} />
    </div>
  );
};

export default MainMovieContainer;
