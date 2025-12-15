"use client";

import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { CalendarRange, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const swiperRef = useRef<any>(null);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const galleryList = [
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
  ];
  return (
    <div className="w-full">
      <LandingSectionsTitle title="گالری تصاویر" />
      <div className="flex items-center justify-between w-full ">
        <Swiper
          onSlideChange={() =>
            swiperRef.current
              ? setGalleryIndex(swiperRef.current!["realIndex"])
              : setGalleryIndex(0)
          }
          className="w-full"
          modules={[Pagination, Navigation]}
          slidesPerView={5}
          loop={true}
          autoplay={true}
          pagination={{ clickable: false }}
          spaceBetween={30}
          onSwiper={(sw) => (swiperRef.current = sw)}
        >
          {galleryList.map((item, _i) => {
            return (
              <SwiperSlide key={_i}>
                <GalleryItem index={_i} {...item}></GalleryItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full flex items-center gap-x-4 justify-center">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => swiperRef.current.slidePrev()}
          className="p-2 rounded-lg bg-[#0097A7] text-white"
        >
          <ChevronRight size={20} />
        </motion.button>
        <div className="flex gap-x-3 items-center">
          {galleryList.map((item, _i) => {
            return (
              <span
                key={_i}
                className={`w-9 h-9 transition-all duration-200 rounded-lg  text-center text-sm flex items-center justify-center ${
                  galleryIndex !== _i
                    ? "bg-neutral-300"
                    : "bg-[#0097A7] text-white"
                }`}
              >
                {convertToFarsiNumbers(String(_i + 1))}
              </span>
            );
          })}
        </div>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => swiperRef.current.slideNext()}
          className="p-2 rounded-lg bg-[#0097A7] text-white"
        >
          <ChevronLeft size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default GallerySection;
const GalleryItem = ({
  index,
  title,
  imageLink,
  tag,
  date,
}: {
  index: number;
  title: string;
  date: string;
  tag: string;
  imageLink: string;
}) => {
  return (
    <div className="mt-8 transition-all duration-200 hover:scale-[1.01] cursor-pointer hover:shadow-[#00000050] hover:-translate-y-3 shadow-[0px_0px_15px_2px] shadow-[#0000002f] w-full h-[380px] flex flex-col rounded-xl overflow-hidden mb-8">
      <Image
        unoptimized
        src={imageLink}
        alt={title}
        width={800}
        height={800}
        className="w-full object-cover object-left h-[280px] rounded-t-xl"
      />
      <div className="flex flex-col items-start gap-y-1 px-5 mt-4">
        <h1 className="font-bold text-xl text-neutral-800">{title}</h1>
        <div className="flex items-center gap-x-3 font-thin text-md text-neutral-700 mt-1">
          <span className="flex items-center gap-x-2">
            <Tag size={18} />
            <p className="inline">{tag}</p>
          </span>{" "}
          |{" "}
          <span className="flex items-center gap-x-2">
            {" "}
            <CalendarRange size={18} />
            <p className="inline">تاریخ: {convertToFarsiNumbers(date)}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
