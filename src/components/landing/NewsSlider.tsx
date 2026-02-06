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
  const fakeImage = [
    "https://dims.apnews.com/dims4/default/4c6da07/2147483647/strip/true/crop/5472x3648+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F3b%2F0e%2F3c9b8fc76a8a35fba954f9c8fd0f%2F73884efa4b80421fb2b235f245be3e29",
  ];
  return (
    <div className="min-[1500px]:w-[calc(100%-(400px+350px+40px))] flex flex-col items-start gap-y-5 overflow-hidden">
      <LandingSectionsTitle title="اخبار امروز" />
      <div className="relative w-full h-[500px] rounded-xl ">
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
          <SwiperSlide>
            <News fakeImages={fakeImage} />
          </SwiperSlide>
          <SwiperSlide>
            <News fakeImages={fakeImage} />
          </SwiperSlide>
          <SwiperSlide>
            <News fakeImages={fakeImage} />
          </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-4 right-[50%] translate-x-[50%] flex items-center gap-x-1 z-200">
          {[1, 2, 3].map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-full w-2 h-2 ${
                  pictureIndex === index ? "w-8 bg-[#0097A7]" : "bg-neutral-700"
                } transition-all duration-200`}
              ></div>
            );
          })}
        </div>
        <motion.div
          onClick={() => swiperRef.current.slidePrev()}
          whileTap={{ scale: 0.95 }}
          className="z-2 flex items-center justify-center absolute top-[45%] translate-y-[-50%] rounded-full p-3 text-white backdrop-blur sm bg-[#00000074] right-1"
        >
          <ChevronRight size={25} />
        </motion.div>
        <motion.div
          onClick={() => swiperRef.current.slideNext()}
          whileTap={{ scale: 0.95 }}
          
          className="z-2 flex items-center justify-center absolute top-[45%] translate-y-[-50%] rounded-full p-3 text-white backdrop-blur sm bg-[#00000074] left-1"
        >
          <ChevronLeft size={25} />
        </motion.div>
      </div>
    </div>
  );
}

export const News = ({ fakeImages }: { fakeImages: string[] }) => {
  return (
    <div className="relative w-full h-[500px] z-1 overflow-hidden rounded-xl">
      <Image
        className="absolute inset-0 rounded-xl h-[500px] w-full object-cover object-center"
        draggable={false}
        width={1000}
        height={1000}
        unoptimized
        src={fakeImages[0]}
        alt="برد علیرضا فیروزجا در مسابقات"
      />

      <div className="z-2 flex flex-col items-start gap-y-4 absolute bottom-0 w-full pb-8 px-16 bg-linear-to-b from-transparent to-70% via-15%  via-[#0505056d] to-[#000000d7]">
        {" "}
        <div className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm">
          شطرنج فیده
        </div>
        <h1 className="font-bold text-white text-3xl leading-[35px]">
          علیرضا فیروزجا مسابقات فیده را به آتش کشید
        </h1>
        <span className="w-full h-[0.3px] bg-neutral-200" />
        <h1 className="font-semibold text-white text-xl leading-[35px]">
          علیرضا فیروزجا در مسابقات فیده هم را شکست داد حتی مگنوس کارلسن
        </h1>
        <div className="text-white flex items-center gap-x-2">
          <CalendarRange size={18} />
          <h5 className="text-lg">
            {convertToFarsiNumbers("تاریخ انتشار: 1404/09/08")}
          </h5>
        </div>
      </div>
    </div>
  );
};
