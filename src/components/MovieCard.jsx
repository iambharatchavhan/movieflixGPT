import React from 'react'
import { POSTER } from '../utils/constant'

const MovieCard = (props) => {
    // console.log(props)
    const {poster_path,title} = props.props
   
  return (
    <div>
      <img src={POSTER + poster_path} alt={title} className='cursor-pointer'/>
    </div>
  )
}

export default MovieCard
