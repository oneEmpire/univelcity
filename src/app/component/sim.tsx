"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Scrollbar from "@/helper/scroll";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import { FreeMode, Pagination } from 'swiper/modules';


function MySwiper() {
  return (
<>
      <Swiper slidesPerView={3}spaceBetween={5}freeMode={true}pagination={{clickable: true,}}modules={[FreeMode, Pagination]} className=" relative flex flex-row  h-[300px] w-[850px] top-[500px] gap-[2px] left-[50px] overflow-hidden">
       
      { Scrollbar.map(  data =>
      
      <SwiperSlide key={data.id} className=' relative top-[10px]'>
<div className="relative flex flex-col shadow-xl h-[220px] w-[250px]">
<h1 className="relative font-bold left-[35px] ">{data.user}</h1>
<p className=" relative w-[200px] left-[35px]">{data.review}</p>
</div>

      </SwiperSlide>
  
      )}
      </Swiper>



    </>
  )
}

export default MySwiper