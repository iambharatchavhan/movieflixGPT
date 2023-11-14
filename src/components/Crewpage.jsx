import React,{useState} from 'react'

const CrewPage = ({crew}) => {
   const [crewDetails,setCrewDetails] = useState()
 
   const productionData = crew.filter((data)=> data.department === "Production")
  
const filterCrew = (type = 'Production') =>{
  const filteredData = crew.filter((data)=> data.department === type)
  setCrewDetails(filteredData)
}

 console.log(crewDetails);  
  return (
    <div>
      <div className='flex justify-around items-center p-4 bg-[#1c1c1c] text-xl text-[#b4aeae]'>
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Production")}>Production</div>
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Crew")}>Main Crew</div> 
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Costume & Make-Up")}>Costume & MakeUp</div>
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Writing")}>Writing</div>
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Art")}>Art</div>
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Camera")}>Camera</div>
      <div className='border-[1px] px-2 rounded-sm border-[#FFC107] hover:text-[#FFC107] cursor-pointer' onClick={()=>filterCrew("Sound")}>Sound</div>
      </div>
      <div className='border-2'>
      {!crewDetails ? productionData.map((data)=>(<h1 key={data.id}>{data.name}</h1>)) : crewDetails.map((data)=>(<h1 key={data.id}>{data.name}</h1>))}
      </div>

    </div>
  )
}

export default CrewPage
