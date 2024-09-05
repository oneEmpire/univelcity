import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import image from "../../../public/image/Univecity-Blue-Horizontal-Logo-1024x188.png"
function Navbar() {
  return (
    <div>
    <div className= " relative flex flex-row justify-between bg-slate-300 h-20 " >
    <Link href={"./"}><div><Image src={image} alt="Univecity Logo" width={150} height={20}  className="relative top-7 left-20"/></div></Link>
        
     
     <ul className=" relative right-24 top-9 hidden lg:flex lg:flex-row gap-10 font-sans" >
     <li><Link href={"./Online"}className=" hover:text-gray-300">Online</Link></li>
     <li><Link href={"./Fullstack"}className=" hover:text-gray-300">Fullstack</Link></li>
     <li><Link href={"./Corporate"}  className=" hover:text-gray-300">Corporate</Link></li>
     <li><Link href={"./FinicialAid"} className=" hover:text-gray-300">Finicial Aid</Link></li>
      <li><Link href={"./Event"} className=" hover:text-gray-300">Event</Link></li>
      <button className="bg-green-500 text-white font-bold text-size-10 relative left-5 h-11 w-36 bottom-3 rounded-xl hover:bg-green-400 outline-none ">Browse course</button>
     </ul>
        </div>
        </div>
  )
}

export default Navbar