import React from 'react';
import Image from 'next/image';
import image13 from "../../../public/image13/Univelcity_logos_Hired-1024x854.jpg";

function Sponsor() {
  return (
    <div>
        
<div className=" flex flex-col lg:flex-row h-[450px]">
 
 <div className=" flex flex-col relative gap-[30px] left-[4%] lg:left-[190px] w-[250px] lg:w-[600px] h-[450px]"> 
 <h1 className=" top-[10px] font-Roboto font-semibold text-[20px] lg:text-[35px] text-[rgb(37,67,107)] relative w-[350px] lg:w-[570px] ">Over 90% of our students find high-paying jobs within the first 6 months of graduating.</h1>
 <p className="relative w-[350px] lg:w-[570px]">Univelcity is a tech school designed to accelerate the growth of tech talent in Africa for the growing demand of businesses, startups in Nigeria and around the world.</p>
 <p className="relative w-[350px] lg:w-[570px]">We use Agile Project-based learning that focuses on in-demand tech skills in the industry.</p>
 <p className="relative w-[350px] lg:w-[570px]">In the last 3 years, we have trained over 1000 developers with more than 400 of them tracked gainfully employed.</p>
 </div>
 
 <div>
 <Image src={image13} alt="image" height={450} className="relative top-[60px] lg:top-[0px] left-[2%] lg:left-[200px]"/>
 </div>
 
 </div>
    </div>
  )
}

export default Sponsor