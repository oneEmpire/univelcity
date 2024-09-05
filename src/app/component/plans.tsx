import React from 'react'
import programs from "@/helper/utils";
import Link from 'next/link';
import Image from 'next/image';


function Plans() {
  return (
    <div>  <div className=" relative bottom-custom-2 w-40 left-20">

    <h1 className=" text-[25px] lg:text-5xl font-bold relative left-[-45%] lg:left-96 bottom-20 w-[360px] lg:w-[700px]">Find your Perfect program</h1>
    <p className=" text-[10px] lg:text-[15px] font-light relative left-[-45%] lg:left-64 w-[350px] lg:w-custom-6 bottom-14">Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</p>
  </div>
         <div className="relative flex flex-col lg:flex-row gap-10 lg:right-[0px] right-[25%]">
    {programs.map(( item=>( 
      
      <div key={item.id} className="relative flex flex-col w-scre lg:w-[400px] bg-white shadow-2xl h-[560px] bottom-[300px] left-[100px] ">
       
       <div className='relative right-[4%] lg:right-[0%]'>
  <div className='relative left-[3%] lg:left-[0%] '>
  <button className="bg-[rgb(0,189,154)] text-white w-[110px] text-xs font-semibold relative h-[35px] top-[50px] left-[15px] rounded-[5px]"> {item.campus_btn}</button>
       
       <Link href={item.direction}><Image src={item.image} alt={item.title} height={250} width={400} className="rounded-t-[5px]"/></Link> 
  </div>
      

        <Link href={item.direction}> <h1 className="w-[300px] font-bold text-xl relative left-5 top-7 text-gray-600 hover:text-[rgb(0,189,154)]">{item.title}</h1></Link>
         <p className="relative top-[50px] w-[350px] left-5 font-[10px] text-gray-700">{item.body}</p>
   <div className="relative flex flex-row top-[70px] left-5 gap-3"> 
     <p className=" relative top-1 ">{item.icon} </p>
      <p>{item.week}</p>
      <p className="relative top-1">{item.icon2}</p>
      <p >{item.times}</p>
      
         </div>
       </div>
    
      </div>

      

    ) ))}

         </div>
<Link href={"./Courses"}><button className="relative h-[60px] w-[200px] bg-green-500 bottom-[200px] left-[35%] lg:left-[670px] rounded-[5px] font-semibold text-white hover:bg-[rgb(0,189,154]">Browse All Courses</button></Link></div>
  )
}

export default Plans