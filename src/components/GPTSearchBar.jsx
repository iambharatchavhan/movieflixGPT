import React, { useRef } from 'react'
import {Slack,Search} from 'lucide-react'
import openai from '../gptopenai'
import Ai from './Ai'


const GPTSearchBar = () => {

 const searchText = useRef(null) 

const handleGPTsearch = async () => {

  const query = "Act as a movie recommendation system  and show the result of 5 movie names for the query: " + searchText.current.value +"  the result should be comma-separated  for example : Bagi, Josh, War, Gadar, Sir"
// gpt Api call for movie result
const apiSearchMessage = await openai.chat.completions.create({
  messages: [{ role: 'user', content: query }],
  model: 'gpt-3.5-turbo',
});


}




  return (
    <div className='relative w-full'>
     <div className='flex flex-col items-center justify-center'>
     <Slack size={40} strokeWidth={1} className='light absolute top-[4.5rem]' />
     <Ai/>
     <p className='text-[10px] text-[#484848]'>Powered By Open Ai</p>
     </div>
      <form  className='w-full flex justify-center items-center py-2 relative ' onSubmit={e => e.preventDefault()}>
        <input type='text' placeholder='What do you want watch today ?' className='px-16 py-3 rounded-full bg-[#1C1C1C] outline-none w-[90%] md:w-[70%] lg:w-1/3 ' ref={searchText}/>
        <button className='absolute left-[82%]  text-red-700 hover:scale-[1.2]  md:left-[80%]  lg:left-[63%]' onClick={handleGPTsearch}><Search/></button>
    
      </form>
    </div>
  )
}

export default GPTSearchBar
