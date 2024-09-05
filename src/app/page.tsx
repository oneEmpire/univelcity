import React from 'react';
import Navbar from '../app/component/navbar';
import SubBody from '../app/component/subBody';
import Plans from '../app/component/plans';
import Grow from '../app/component/grow';
import Sponsor  from '../app/component/sponsor';
import Numbers from '../app/component/numbers';
import MySwiper from '../app/component/sim';
import Dropdown from './component/dropdown';
import Start from '../app/component/start';
import Footer from './component/footer';
import { Suspense } from 'react';
import Firstbody from "../app/component/firstbody";
import SwiperSlideTwo from './component/clone';


export default function page() {

  return (
    
   <> 

  <Suspense fallback={<div>Loading...</div>}>
  <div className='flex flex-col h-[11000px] lg:h-[9100px] relative w-scre overflow-hidden'>
   <Navbar/>
   <Firstbody/>
   <SubBody/>
   <div className='relative top-[400px] lg:top-[100px]'>
   <Plans/>
   <Grow/>
  <Sponsor/>
  <div className='relative top-[300px] lg:top-[0px]'>
  <Numbers/>
  
  <div className='hidden lg:flex '><MySwiper/></div>
  <div className='relative top-[500px] lg:hidden'><SwiperSlideTwo /></div>
  
  <Dropdown />

  <Start/>
   <Footer/>
  </div>
  
   </div>

  </div>

  </Suspense>
    
    
    </>
  )
}
