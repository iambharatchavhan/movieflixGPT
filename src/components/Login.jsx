import React from 'react'
import { IMG_BG } from '../Assets/constants'
import Header from './Header'

const Login = () => {
  return (
    <div className='bg-black  w-full h-screen'>
<Header/>
    
     <div className='flex justify-center items-center h-[100vh]' >
       
       <img src={IMG_BG} alt="" srcset="" className='hidden backdrop-brightness-95 bg-white/30' />
       <div className='absolute top-12 h-full'>
        <div className=' h-full w-screen'>
        <h1 className='text-[1.9rem] font-bold text-white mt-3 ml-4'>Sign In</h1>
          <form action="" className=' h-full flex flex-col justify-start items-center mt-5'>
           <div className=' h-2/1 flex flex-col w-full items-center gap-4 p-4'>
            <input type="text" placeholder='Email or phone number' className='p-3.5 w-full rounded-md bg-[#333333]'/>
            <input type="password" placeholder='Password' className='p-3.5 w-full rounded-md bg-[#333333]'/> 
            <button className='text-white font-bold p-3.5 w-full rounded-md bg-[#E50914] mt-5'>Sign In</button>
           </div>
            <div  className='text-white w-full flex justify-between px-4'>
              <div className=''>
             <label htmlFor="remember">Remember me</label> <input type="checkbox" name='remember'/>

              </div>
              <div>
             <a href="www.google.com" >Need help?</a>
             
              </div>
             

            </div>
            <a href="www.google.com" className='text-white  w-full px-2 py-2 text-md'><span className='text-gray-400 px-2 '>New to Netflix?</span> Sign up now</a>
          </form>
        </div>
       </div>
     </div>
    </div>
  
  )
}

export default Login
