import React from 'react'
import image2 from "../../../public/image2/Group-members (1).jpg"
import Image from 'next/image'


export default function Firstbody() {
  return (
    <div className='flex flex-col flex-wrap' >
    <div className='w-scre ' ><Image src ={ image2} alt = "group" height={700}/></div>
    
    <div className=" lg:w-[850px] w-200px lg:h-80 m-4 relative  lg:left-[20%] lg:bottom-[500px] bottom-[200px] text-green-500 bg-white bg-opacity-55 rounded-3xl text-wrap " >
    
    <div className='relative lg:right-[40px] lg:flex lg:flex-col lg:text-[60px] text-[30px] font-extrabold lg:font-extrabold top-[35%] left-[10%]'>
    <h1>Accelerate your career</h1>
    <h1 className='relative left-[30%]' >in tech</h1>
    </div>
    
    </div>
    
    </div>  
  )
}
