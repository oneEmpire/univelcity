import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import image2 from "../../../public/image2/Group-members (1).jpg"
import image3 from "../../../public/image3/image.jpg"


function SubBody() {
  return (
    <div>

  
  <div className="relative flex flex-col lg:flex-row justify-between top-[200px] gap-[60px] lg:gap-[0px] lg:top-[-70px]">
    <div className=" bg-white bg-opacity-90 lg:w-custom-3 relative bottom-96 h-custom-2  flex flex-col gap-10 lg:left-28 rounded-3xl shadow-2xl">
   <div className=" relative flex flex-row gap-5 left-14 top-5"> <Image src={image3} alt ="icon" height={40} width={40} /> <h1 className="text-2xl font-bold">Individual</h1> </div>
 <p className="relative left-10 w-[340px] lg:w-[600px] font-bold">Accelerate your dream of becoming a world-class software developer or <br />
  designer.</p>
  <Link href={"./Course"}><button className=" top-[-12px] lg:top-0px relative h-custom-4 w-52 bg-green-500 rounded-[5px] text-white font-semibold left-9 active:bg-green-200">Browse Courses</button></Link>
  
    </div>

     <div className=" bg-white bg-opacity-90 lg:w-custom-3 relative bottom-96 h-custom-2  flex flex-col gap-10 lg:right-[100px] rounded-3xl shadow-2xl">
   <div className=" relative flex flex-row gap-5 left-14 top-5"> <Image src={image3} alt ="icon" height={40} width={40} /> <h1 className="text-2xl font-bold">Corporate</h1> </div>
 <p className="relative left-10  w-[350px] lg:w-[600px] font-bold ">Professional Staff training courses applicable to any corporate <br />
 organization.</p>
 <Link href={"./learn-more"}><button className=" relative h-custom-4 w-52 text-white font-semibold bg-green-500 top-[-12px] left-9 rounded-[5px] active:bg-green-200">Learn More</button></Link>

    </div>

    

  </div>
    </div>
    
  )
}

export default SubBody