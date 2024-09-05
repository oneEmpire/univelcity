"use client"
import React, { useRef, useState } from 'react';
import Scrollbar from "@/helper/scroll";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';

 function SwiperSlideTwo() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
          
      { Scrollbar.map(  data =>
      
      <SwiperSlide key={data.id} className=' relative top-[10px]'>
<div className="relative flex flex-col shadow-xl h-[220px] w-[250px] left-[17%]">
<h1 className="relative font-bold left-[35px] ">{data.user}</h1>
<p className=" relative w-[200px] left-[35px]">{data.review}</p>
</div>

      </SwiperSlide>
  )}
      </Swiper>
    </>
  );

}
export default SwiperSlideTwo
