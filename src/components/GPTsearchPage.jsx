import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTPrompt from './GPTPrompt'

const GPTsearchPage = () => {
  return (
    <div className='text-white h-screen flex flex-col items-center'>
     <GPTSearchBar/>
     <GPTPrompt/>
    </div>
  )
}

export default GPTsearchPage
