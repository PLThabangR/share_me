import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
const Login = () => {
  return (

    <div className="flex justify-start items-center flex-col h-screen">
    <div className='relative w-full h-full'>

    <video
    src={shareVideo}
    type='video.mp4'
    loop
    controls={false}
    muted
    autoPlay
    />
    </div>
  
    
    </div>
  )
}

export default Login