import React from 'react'
import {Slack,Search} from 'lucide-react'
import Ai from './Ai'


const GPTSearchBar = () => {
  return (
    <div className='mt-2 relative w-full'>
     <div className='flex flex-col items-center justify-center'>
     <Slack size={40} strokeWidth={1} className='light absolute top-[4.5rem]' />
     <Ai/>
     <p className='text-[10px] text-[#484848]'>Powered By Open Ai</p>
     </div>
      <form  className='w-full flex justify-center items-center py-2 relative '>
        <input type='text' placeholder='What do you want watch today ?' className='px-16 py-3 rounded-full bg-[#1C1C1C] outline-none w-1/3 '/>
        <button className='absolute left-[63%] text-red-700 hover:scale-[1.2]'><Search/></button>
      
      </form>
    </div>
  )
}

export default GPTSearchBar
