import React from 'react'
import Login from './Login'
import Brows from './Brows'
import Error from './Error'
import PopularPage from './PopularPage'
import TopPage from './TopPage'
import UpComingPage from './UpComingPage'
import NowPlayingPage from './NowPlayingPage'

import { createBrowserRouter,RouterProvider} from 'react-router-dom'




const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
            errorElement:<Error/>

            
        },
        {
          path:"/brows",
          element:<Brows/>
        },
       
        {
          path:"/brows/popular",
          element:<PopularPage/>
        },
       
      
      
      
      
    ])


   


  return (
    <div className='dark:bg-black'>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
