import React from 'react';
import { UserCircle } from 'lucide-react';
import { POSTER } from '../utils/constant';

const CastDetails = (props) => {
  const { cast, crew } = props;

  console.log(crew);

  return (
    <div className='p-10 flex flex-wrap gap-20'>
      {cast.length ? (
        // Render cast details if there is cast data
        cast.map((worker, i) => (
          <div
            className='border-2 border-[#FFC107] relative w-[290px] h-[65px] rounded-e-full flex flex-col justify-center items-start py-2 pl-10 left-8 bg-[#1c1c1c]'
            key={i}
          >
            <p>{worker.original_name}</p>
            <h1>
              As: <span className='text-[#FFC107]'>{worker.character}</span>
            </h1>
            {worker.profile_path && (
              <img
                src={POSTER + worker.profile_path}
                alt=''
                className='w-[70px] h-[70px] object-cover rounded-full border-[2px] border-[#FFC107] absolute left-[-2.5rem] bg-black'
              />
            )}
            {!worker.profile_path && (
              <UserCircle
                className='w-[70px] h-[70px] object-cover rounded-full border-[2px] border-[#FFC107] absolute left-[-2.5rem] bg-black text-[#FFC107]'
              />
            )}
          </div>
        ))
      ) : crew.length ? (
        // Render crew details if there is crew data
        crew.map((crewMember, i) => (
          <div
          className='border-[1px] border-[#FFC107] relative w-[290px] h-[65px] rounded-e-full flex flex-col justify-center items-start py-2 pl-10 left-8 bg-[#1c1c1c]'
          key={i}
        >
          <p>{ crewMember.job}</p>
          <h1>
            <span className='text-[#FFC107]'>{crewMember.original_name}</span>
          </h1>
          {crewMember.profile_path && (
            <img
              src={POSTER + crewMember.profile_path}
              alt=''
              className='w-[70px] h-[70px] object-cover rounded-full border-[2px] border-[#FFC107] absolute left-[-2.5rem] bg-black'
            />
          )}
          {!crewMember.profile_path && (
            <UserCircle
              className='w-[70px] h-[70px] object-cover rounded-full border-[2px] border-[#FFC107] absolute left-[-2.5rem] bg-black text-[#FFC107]'
            />
          )}
        </div>
        ))
      ) : (
        // Render a message when both cast and crew data are not found
        <div className='text-[#FFC107]  w-full text-center text-xl'><span className='border-[1px] border-[#FFC107] text-center p-4 text-2xl font-mono rounded-sm'>We don't have the data on hand at this time 🤖</span></div>
      )}
    </div>
  );
};

export default CastDetails;