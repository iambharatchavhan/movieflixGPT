import React,{useEffect} from 'react'
import Login from './Login'
import Brows from './Brows'
import Error from './Error'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import {useDispatch} from "react-redux"
import {addUser,removeUser} from "../utils/userSlice"



const Body = () => {
  const dispatch = useDispatch()

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
useEffect(()=>{

  onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const {uid,email,displayName} = user;
     dispatch(addUser({uid:uid, email:email,displayName:displayName}) )
  } else {
    // User is signed out
   dispatch(removeUser())
  }
});
},[])

   


  return (
    <div className='dark:bg-black'>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body
