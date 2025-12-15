"use client";

import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { CalendarRange, Tag } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const GallerySection = () => {
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
          className="m-5 w-full"
          modules={[Pagination, Navigation]}
          slidesPerView={5}
          loop={true}
          autoplay={true}
          pagination={{ clickable: false }}
          spaceBetween={30}
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
    <div className="shadow-[0px_0px_15px_2px] shadow-[#0000002f] w-full h-[380px] flex flex-col rounded-xl overflow-hidden mb-8">
      <Image
        unoptimized
        src={imageLink}
        alt={title}
        width={800}
        height={800}
        className="w-full object-cover h-[280px] rounded-t-xl"
      />
      <div className="flex flex-col items-start gap-y-1 px-5 mt-4">
        <h1 className="font-bold text-xl text-neutral-800">{title}</h1>
        <div className="flex items-center gap-x-3 font-thin text-md text-neutral-700 mt-1">
          <span className="flex items-center gap-x-2">
            <Tag size={18} />
            <p className="inline">{tag}</p>
          </span>
          {" "} | {" "} 
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
