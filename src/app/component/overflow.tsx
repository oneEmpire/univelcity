"use client"
import React from "react";
import Scrollbar from "@/helper/scroll";


export default function Overflow() {
  return (

<>

<div className=" relative flex flex-row w-[800px] overflow-auto top-[500px] gap-[20px] left-[400px]"  >
  
 { Scrollbar.map( ( data=> 
 
 <div key={data.id}>
  <div className="relative flex flex-col shadow-xl h-[220px] w-[300px]">
  <h1 className="relative font-bold left-[35px] ">{data.user}</h1>
   <p className=" relative w-[250px] left-[35px]">{data.review}</p>

  </div>
  

 </div>



 ))}

  </div></>

  );
}
