import React from "react";
import { POSTER } from "../utils/constant";
import { Heart, Star, Flame ,CircleDollarSign} from "lucide-react";

const MovieInformation = (details) => {
  // console.log(details.details)

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
    // console.log(posterUrl,imgVal);
  return (
    <>
      <div className="flex justify-center items-center w-full h-full" >
        <div className="grid grid-cols-2  w-[65%] rounded-md overflow-hidden  bg-[#1c1c1c] m-10 shadow-[0px_0px_10px_0px_#E6FFFA]  ">
          <div className="flex flex-col justify-start items-start gap-4 p-4 ">
            <div className="flex justify-start gap-4 w-full ">
              <div>
                <img
                  src={POSTER + poster_path}
                  alt="poster"
                  className="w-[80px]"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold">{original_title}</h1>
                <p className="text-[12px] text-[#d7d7d7] mb-2">{tagline}</p>
                <p className=" rounded-md text-[#FFC107] mb-2 ">
                  <span className="bg-[#1c1c1c] px-1 rounded-sm">
                    {release_date}
                  </span>
                </p>
                <div className="flex gap-4 ">
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
              <p className="break-all text-justify min-h-[150px]">{overview}</p>
            </div>
            <div className="flex gap-8">
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
            <span className="absolute h-full  shadow-[-10px_0px_200px_300px_#1c1c1c]"></span>
       
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
