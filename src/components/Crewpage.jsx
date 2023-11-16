import React, { useState, useEffect } from 'react';
import CastDetails from './CastDetails';

const CrewPage = ({ crew, cast }) => {
  const [crewDetails, setCrewDetails] = useState(null);
  const [selectedType, setSelectedType] = useState('Acting'); // Set the default type to 'Acting'

  const filteredData = crew.filter((data) => data.department === selectedType); // Corrected the property name
  const castData = cast.filter((data) => data.known_for_department === selectedType);

  const filterCrew = (type) => {
    setSelectedType(type);
    setCrewDetails(null);
  };

  const castActors = () => {
    setSelectedType('Acting');
    setCrewDetails(null);
  };

  // Use useEffect to update crew details when selectedType changes
  useEffect(() => {
    if (selectedType !== 'Acting') {
      // Filter crew details based on the selected type
      const crewDetailsForType = crew.find((data) => data.department === selectedType);
      setCrewDetails(crewDetailsForType || null);
    }
  }, [selectedType, crew]);

  // console.log("filetr",filteredData);
  // console.log("cast", castData);

  return (
    <div>
      <div className='flex justify-around items-center p-4 bg-[#1c1c1c] text-xl text-[#b4aeae]'>
        <div
          className={`border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer ${
            selectedType === 'Acting' ? 'text-[#FFC107]' : ''
          }`}
          onClick={() => castActors()}
        >
          Cast
        </div>
        {[
          'Production',
          'Crew',
          'Costume & Make-Up',
          'Writing',
          'Art',
          'Camera',
          'Sound',
        ].map((type) => (
          <div
            key={type}
            className={`border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer ${
              selectedType === type ? 'text-[#FFC107]' : ''
            }`}
            onClick={() => filterCrew(type)}
          >
            {type}
          </div>
        ))}
      </div>
      <div className=''>
      {  // {castData && castData.map((cast)=>(<h1 key={cast.id}>{cast.name}</h1>))}
        // {filteredData && filteredData.map((cast)=>(<h1 key={cast.id}>{cast.name}</h1>))}
      }
      <CastDetails cast={castData} crew={filteredData}/>
      </div>
    </div>
  );
};

export default CrewPage;
