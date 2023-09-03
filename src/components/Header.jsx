import React from 'react'
import { IMG_LOGO } from '../Assets/constants'

const Header = () => {
  return (
    <div className='absolute z-50 '>
      < img src={IMG_LOGO} alt="" className='w-1/3 p-4' />
    </div>
  )
}

export default Header
