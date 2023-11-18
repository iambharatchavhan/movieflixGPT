import React, { useState, useEffect } from "react";
import CastDetails from "./CastDetails";

const CrewPage = ({ crew, cast }) => {
  const [crewDetails, setCrewDetails] = useState(null);
  const [selectedType, setSelectedType] = useState("Acting"); // Set the default type to 'Acting'

  const filteredData = crew.filter((data) => data.department === selectedType); // Corrected the property name
  const castData = cast.filter(
    (data) => data.known_for_department === selectedType
  );

  const filterCrew = (type) => {
    setSelectedType(type);
    setCrewDetails(null);
  };

  const castActors = () => {
    setSelectedType("Acting");
    setCrewDetails(null);
  };

  // Use useEffect to update crew details when selectedType changes
  useEffect(() => {
    if (selectedType !== "Acting") {
      // Filter crew details based on the selected type
      const crewDetailsForType = crew.find(
        (data) => data.department === selectedType
      );
      setCrewDetails(crewDetailsForType || null);
    }
  }, [selectedType, crew]);


  const castNav = [ "Production", "Crew","Costume & Make-Up", "Writing","Art", "Camera", "Sound",];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center p-4 bg-[#1c1c1c] text-xl text-[#b4aeae] sticky top-0 z-10 border-[1px] border-[#FFC107] md:justify-around">
        <div
          className={` px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer ${
            selectedType === "Acting" ? "text-[#FFC107]" : ""
          }`}
          onClick={() => castActors()}
        >
          Cast
        </div>
        {castNav.map((type) => (
          <div
            key={type}
            className={` px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer  ${
              selectedType === type ? "text-[#FFC107]" : ""
            }`}
            onClick={() => filterCrew(type)}
          >
            {type}
          </div>
        ))}
      </div>
      <div className="">
        <CastDetails cast={castData} crew={filteredData} />
    
      </div>
    </div>
  );
};

export default CrewPage;
