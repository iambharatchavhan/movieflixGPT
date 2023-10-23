import React from 'react'
import Login from './Login'
import Brows from './Brows'
import Error from './Error'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'




const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/brows",
            element:<Brows/>
        },
        {
          path:"/error",
          element:<Error/>
      }
    ])


   


  return (
    <div className='dark:bg-black'>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
