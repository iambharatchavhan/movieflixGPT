import React from 'react'
import { IMG_BG } from '../Assets/constants'
import Header from './Header'

const Login = () => {
  return (
    <div>
<Header/>
     <div className=''>
       
       <img src={IMG_BG} alt="" srcset="" className='backdrop-brightness-95 bg-white/30' />
       <div className='absolute w-full min-h-screen border-4 border-red-500 top-0 bg-black/50'>
        <div className='border-2 border-blue-500 h-[100vh] flex justify-center items-center'>
          <form action="" className='flex flex-col justify-around items-center border-2 border-blue-500 w-1/3 h-[90vh]'>
           <div className='flex flex-col gap-4 justify-start items-center'>
           <h1 className='text-4xl font-semibold text-white'>Sign In</h1>
            <input type="text" placeholder='Email or phone number'/>
            <input type="password" placeholder='Password' className='w-'/> 
            <input type="submit" value="Sign In"/> 
           </div>
            <div>
             <label htmlFor="remember">Remember me</label> <input type="checkbox" name='remember'/>
             <a href="www.google.com">Need help ?</a>
            </div>
          </form>
        </div>
        <div className='absolute w-full border-4 border-blue-500 bottom-0'>
          Footer
        </div>
       </div>
     </div>
    </div>
  
  )
}

export default Login
