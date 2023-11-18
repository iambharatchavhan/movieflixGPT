import React from 'react'
import { POSTER } from '../utils/constant'
import { useNavigate } from 'react-router-dom'

const MovieCard = (props) => {

    const navigate = useNavigate()
    const {poster_path,title ,id} = props.props
   
    const handleMovieId =()=>{
        navigate("/brows/"+ id)
    }


   
  return (
    <div className='w-[95px] h-[150px]   md:w-[150px] md:h-[200px] md:my-3    lg:w-[200px] lg:h-[300px]' onClick={handleMovieId}>
      <img src={POSTER + poster_path} alt={title} className='cursor-pointer rounded-lg hover:scale-110 transition duration-500 md:object-cover'/>
    </div>
  )
}

export default MovieCard;
