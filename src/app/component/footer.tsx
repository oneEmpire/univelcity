import React from 'react';
import Image from 'next/image';
import image14 from "../../../public/image14/Univelcity.png"
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";



function Footer() {
  return (
    <div>
 <div className='h-[1350px] lg:h-[800px] relative top-[700px] bg-[rgb(18,41,71)] w-scre'>

<div className=' relative grid grid-cols-1 sm:grid-cols-1 left-[16%] md:grid-cols-2 lg:grid-cols-4 lg:left-[0px] top-[60px] gap-[5%]  '>

<div className='w-[100px] h-[100px] relative left-[20%]'>
<Image src={image14} alt='logo' ></Image>
</div>


<div className=' gap-[20px] flex flex-col'>   

    <h1 className='text-[white] text-[20px] font-semibold w-[170px]'>Our Mission</h1>
    <p className='relative w-[300px] text-[white]'>Our goal is to build driven, passionate and
         outstanding developers with industry-ready
          programming proficiency and soft-skills.</p>
</div>




<div className='gap-[15px] flex flex-col' >

<h1 className='text-[white] text-[20px] font-semibold w-[170px]'>Quick links</h1>
 <ul className='relative w-[200px] text-[white] '>

    <Link href={"./about"}><li>About Us</li></Link>
    <Link href={"./Courses"}><li>Browse Courses</li></Link>
    <Link href={"./Corporate"}><li>Corporate</li></Link>
    <Link href={"./FinicialAid"}><li>Financial Aid</li></Link>
    <Link href={"./Event"}><li>Workshops and Events</li></Link>
    <Link href={"'./faQ'"}><li>FAQs</li></Link>
    <Link href={"./Contact"}><li>Contact us</li></Link>

 </ul>


</div>


<div className='relative flex flex-col gap-[30px] text-[white] '>

<div className='w-[250px] '>

  <h1 className='text-[white] text-[20px] font-semibold'>Contact</h1>

<span>No 42, Montgomery Road, Yaba Lagos, Nigeria.</span> </div>

<div className='gap-[15px] flex flex-col' >
    <h1> for more info on our Classes</h1>
    <p>(+234) 906 355 2422</p>
    <p>(+234) 906 355 2422</p>
    <p>(+234) 906 355 2422</p>
</div>


<div>
  <h1  className='text-[white] text-[15px] font-semibold'>For corporate enquiry;</h1>
  <span>(+234) 703 6188 527</span>
  
</div>

<div className='relative flex flex-col'>
   <h1  className='text-[white] text-[15px] font-semibold'>Email</h1>
<span>hello@univelcity.com</span>
<span>Online@univelcity.com</span></div>



</div>





</div>



<div className='top-[300px]  flex flex-col relative left-[15%] lg:left-[35%] lg:top-[150px] w-[300px] lg:w-[600px] gap-[30px]'>
 <hr className=' relative right-[10px] lg:right-[0px]' />
 <div className='flex flex-row gap-[20px] text-[white] relative left-[15%] lg:left-[40%] w-[300px]'>
  <Link href={"https://web.facebook.com/login"}><FaFacebook className='h-[30px] w-[30px]'/></Link>
  <Link href={"https://twitter.com/home"}><FaSquareXTwitter className='h-[30px] w-[30px]'/></Link>
  <Link href={"https://www.instagram.com/accounts/login/?hl=en"}><FaInstagramSquare className='h-[30px] w-[30px]'/></Link>
  <Link href={"https://www.linkedin.com/login"}><FaLinkedin className='h-[30px] w-[30px]'/></Link>

 </div>
<div className=' relative flex flex-col gap-[30px]'>

<h1 className='font-[20px] text-[white] lg:w-[600px] left:-[10px] lg:left-[20px] relative'>Copyright © Univelcity School of Technology 2021 All Rights Reserved.</h1>
 <span style={{textDecoration: "underline"}} className='text-[white] relative left-[25%] font-[10px]'>Privacy Policy / Terms of Use / Cookie Policy</span>

</div>

</div>
 </div>




    </div>
  )
}

export default Footer