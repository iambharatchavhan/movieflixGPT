import React from "react";
import { POSTER } from "../utils/constant";
import { Heart, Star, Flame ,CircleDollarSign} from "lucide-react";

const MovieInformation = (details) => {
 

  const {
    belongs_to_collection,
    backdrop_path,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    revenue,
    tagline,
    vote_average,
    genres,
  
   
  } = details.details;
 const isPoster = belongs_to_collection?.backdrop_path ? belongs_to_collection?.backdrop_path : backdrop_path;
  const posterUrl = POSTER + isPoster;
  return (
    <>
      <div className=" flex justify-center items-center w-full lg:h-screen">
        <div className="grid grid-row-2 w-full mt-12  md:w-[100%] lg:grid lg:grid-cols-2  lg:rounded-md md:mt-14 lg:overflow-hidden  lg:bg-[#1c1c1c] lg:m-10 lg:shadow-[0px_0px_10px_0px_#E6FFFA] lg:w-[65%]">
          <div className="flex flex-col justify-center md:px-4 md:items-start md:justify-start  lg-px-0 lg:flex-col lg:justify-start lg:items-start lg:gap-4 lg:p-4">
            <div className="flex justify-center items-center flex-wrap md:justify-start md:items-start md:gap-1 md:w-full lg:gap-4">
              <div>
                <img
                  src={POSTER + poster_path}
                  alt="poster"
                  className="hidden md:block md:w-[80px]"
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-semibold">{original_title}</h1>
                <p className="text-[12px] text-[#d7d7d7] mb-2">{tagline}</p>
                <p className=" rounded-md text-[] mb-2 ">
                  <span className="bg-[#1c1c1c] px-1 rounded-sm">
                    {release_date}
                  </span>
                </p>
                <div className="flex flex-wrap gap-1 md:gap-4 ">
                  {genres.map((tag) => (
                    <p
                      key={tag.id}
                      className="border-[1px] border-[#1c1c1c] rounded-sm px-1 bg-[#2b2b2b] text-[#FFC107]"
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="break-all">
              <p className="break-all p-4 text-justify min-h-[10px] md:min-h-[150px] md:p-0">{overview}</p>
            </div>
            <div className="flex gap-2 p-2 md:gap-8 md:py-2">
              <div className="flex justify-center items-center gap-2 px-2 py-1 rounded-full border-[1px] border-[#FFC107] text-[#FFC107]" >
              <CircleDollarSign strokeWidth={1} size={25}/> <span> {(Math.abs(Number(revenue)) / 1.0e6).toFixed(2)}M</span>
              </div>
              <div  className="flex justify-center items-center gap-2 px-2 py-1 rounded-full border-[1px] border-[#FFC107] text-[#FFC107] ">
                <Star strokeWidth={1} /><span>{Math.round(vote_average * 10) / 10}</span>
              </div>
              <div  className="flex justify-center items-center gap-2 px-2 py-1 rounded-full border-[1px] border-[#FFC107] text-[#FFC107] ">
                <Flame strokeWidth={1} /><span>{Math.trunc(popularity)}</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative z-10">
            <span className="absolute w-full shadow-[0px_10px_90px_100px_#000] lg:shadow-[-10px_0px_200px_300px_#1c1c1c] lg:h-full lg:w-0"></span>
       
              <img
                src={posterUrl}
                alt="sec-img"
                className="object-cover w-full h-full "
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInformation;
