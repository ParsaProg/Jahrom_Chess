"use client";

import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";
import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { motion } from "framer-motion";

export default function NewsSlider() {
  const [pictureIndex, setPictureIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full xl:w-[calc(100%-(400px+350px+40px))] flex flex-col items-start gap-y-5 overflow-hidden">
      <LandingSectionsTitle title="اخبار امروز" />
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl">
        <Swiper
          onSlideChange={() =>
            swiperRef.current
              ? setPictureIndex(swiperRef.current["realIndex"])
              : setPictureIndex(0)
          }
          loop={true}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index}>
              <News />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="absolute bottom-4 right-[50%] translate-x-[50%] flex items-center gap-x-1.5 z-20">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-200 ${
                pictureIndex === index 
                  ? "w-6 sm:w-8 h-2 bg-[#0097A7]" 
                  : "w-2 h-2 bg-neutral-400"
              }`}
            />
          ))}
        </div>
        
        <motion.div
          onClick={() => swiperRef.current?.slidePrev()}
          whileTap={{ scale: 0.95 }}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20 flex items-center justify-center rounded-full p-2 sm:p-3 text-white backdrop-blur-sm bg-[#00000074] cursor-pointer"
        >
          <ChevronRight size={20} className="sm:size-[25px]" />
        </motion.div>
        
        <motion.div
          onClick={() => swiperRef.current?.slideNext()}
          whileTap={{ scale: 0.95 }}
          className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20 flex items-center justify-center rounded-full p-2 sm:p-3 text-white backdrop-blur-sm bg-[#00000074] cursor-pointer"
        >
          <ChevronLeft size={20} className="sm:size-[25px]" />
        </motion.div>
      </div>
    </div>
  );
}

export const News = () => {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-xl">
      <Image
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
        width={1000}
        height={1000}
        unoptimized
        src="https://images.chesscomfiles.com/uploads/v1/news/1906086.4306076f.630x354o.2ad6790d4340@2x.png"
        alt="برد علیرضا فیروزجا در مسابقات"
      />
      <div className="absolute bottom-0 w-full px-4 sm:px-8 md:px-16 pb-6 sm:pb-8 flex flex-col items-start gap-y-3 sm:gap-y-4 bg-gradient-to-b from-transparent via-[#0505056d] to-[#000000d7]">
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-green-600 text-white text-xs sm:text-sm">
          شطرنج فیده
        </div>
        <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl leading-tight sm:leading-[35px]">
          علیرضا فیروزجا مسابقات فیده را به آتش کشید
        </h1>
        <span className="w-full h-[0.3px] bg-neutral-200" />
        <h1 className="font-semibold text-white text-base sm:text-lg md:text-xl leading-tight sm:leading-[35px]">
          علیرضا فیروزجا در مسابقات فیده هم را شکست داد حتی مگنوس کارلسن
        </h1>
        <div className="text-white flex items-center gap-x-2">
          <CalendarRange size={16} className="sm:size-[18px]" />
          <h5 className="text-xs sm:text-sm md:text-base">
            {convertToFarsiNumbers("تاریخ انتشار: 1404/09/08")}
          </h5>
        </div>
      </div>
    </div>
  );
};