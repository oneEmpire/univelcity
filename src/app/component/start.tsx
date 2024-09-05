import React from 'react';
import Link from 'next/link';

function Start() {
  return (
    <div>
<div className='w-scre h-[500px] bg-[rgb(23,53,92)] relative top-[700px]'>
<div className='relative right-[150px] lg:right-0'>
<h1 className='text-white text-[35px] font-semibold relative top-[100px] left-[40%] w-[500px]'>Welcome to Univelcity</h1>

   <p className='relative flex flex-col w-[350px] lg:w-[600px] left-[45%] lg:left-[32%] top-[150px] font-light text-white'>
    <span>By 2030 there would be a huge deficit of tech talent globally. Whether you</span>
    <span>are looking to change your career path, increase your earning, Univelcity is a</span>
    <span>tech school designed to accelerate your career in tech. Our approach is Agile</span>
    <span className='relative lg;left-[15px]'>Project-based learning that focuses on in-demand tech skills by the</span>
    <span className='relative left-[-1px] lg:left-[150px]'>industries. The time to start is now!</span>
    
   </p>
 

   <Link href={"./Courses"}><button className="relative h-[40px] lg:h-[60px] w-[200px] bg-green-500 bottom-[200px] left-[50%] lg:left-[670px] rounded-[5px] font-semibold text-white hover:bg-[rgb(0,189,154] top-[160px] lg:top-[190px]">Browse All Courses</button></Link>
</div>
  
</div>

</div>    
  )
}

export default Start