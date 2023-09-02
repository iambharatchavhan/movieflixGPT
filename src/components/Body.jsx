import React from 'react'
import Login from './Login'
import Brows from './Brows'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'



const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/brows",
            element:<Brows/>
        }
    ])

  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
