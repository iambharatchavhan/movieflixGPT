import React from 'react'
import { IMG_BG } from '../Assets/constants'
import Header from './Header'

const Login = () => {
  return (
    <div className='bg-black border border-yellow-700 w-full h-screen'>
<Header/>
    
     <div className='flex justify-center items-center h-[100vh] border border-white' >
       
       <img src={IMG_BG} alt="" srcset="" className='hidden backdrop-brightness-95 bg-white/30' />
       <div className='absolute top-12 h-full'>
        <div className=' h-full w-screen'>
        <h1 className='text-3xl font-semibold text-white mt-5 ml-4'>Sign In</h1>
          <form action="" className=' h-full flex flex-col justify-start items-center mt-5'>
           <div className='border border-blue-700 h-2/3 flex flex-col w-full items-center gap-3 p-4'>
            <input type="text" placeholder='Email or phone number' className='p-3 w-full rounded-sm bg-[#333333]'/>
            <input type="password" placeholder='Password' className='p-3 w-full rounded-sm bg-[#333333]'/> 
            <input type="submit" value="Sign In" className='text-white p-3 w-full rounded-md bg-[#E50914] mt-5'/> 
           </div>
            <div  className='text-white'>
             <label htmlFor="remember">Remember me</label> <input type="checkbox" name='remember'/>
             <a href="www.google.com">Need help ?</a>
            </div>
          </form>
        </div>
       </div>
     </div>
    </div>
  
  )
}

export default Login
