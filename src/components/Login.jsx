import React from 'react'
import { GoogleLogin } from '@react-oauth/google'; 
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
const Login = () => {
 //cliendId//113733482410-i5ttkpc7vlotth3j898gcvmnfb6vno3a.apps.googleusercontent.com
 //ClientSecret//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

 const responseGoogle =(response)=>{

 }

    return (

        <>
       
    <div className="flex justify-start items-center flex-col h-screen">
    <div className='relative w-full h-full'>

    <video
    src={shareVideo}
    type='video.mp4'
    loop
    controls={false}
    muted
    autoPlay
    className='w-full h-full object-cover'
    />
    <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
    <div className='p-5'>
    <img src={logo} width="130px" alt="logo"/>
    </div>
    <div className='shadow-2xl'>
        <GoogleLogin
      
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="sinle_host_origin"

        />
    </div>
    </div>
    </div>
  
    
    </div>
  

    </>
  )
}

export default Login