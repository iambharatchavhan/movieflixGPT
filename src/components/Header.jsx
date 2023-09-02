import React from 'react'
import { IMG_LOGO } from '../Assets/constants'

const Header = () => {
  return (
    <div className='absolute z-50'>
      < img src={IMG_LOGO} alt="" className='w-60 p-8' />
    </div>
  )
}

export default Header
