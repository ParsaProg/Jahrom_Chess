"use client";

import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { CalendarRange, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const swiperRef = useRef<any>(null);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);
  const [slidePerView, setSlidePerView] = useState<number>(4);
  const [totalSlides, setTotalSlides] = useState<number>(0);

  const galleryList = [
    {
      title: "مسابقه فارس",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/news/1794802.34f87a39.668x375o.ef877ca787ae@2x.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://www.chess.com/bundles/web/images/social/share-news.f0cb71ce.png",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink: "https://en.chessbase.com/Portals/all/thumbs/127/127997.jpeg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://dims.apnews.com/dims4/default/ae0dc39/2147483647/strip/true/crop/4000x2666+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd0%2Fea%2Fe5e11fbf0f5c260a281c6959af29%2F4bc14eada9484c03a9a88da0d8329e6a",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
    {
      title: "مسابقه بزرگ جهرم",
      imageLink:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/TarjeiJS/phpVTwBPb.jpg",
      date: "1404/09/08",
      tag: "استاد بویه",
    },
  ];

  // محاسبه تعداد صفحات بر اساس تعداد آیتم‌ها و slidePerView
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const slidesCount = galleryList.length;
      const isLoop = swiper.params.loop;
      
      // در حالت loop، swiper صفحات بیشتری ایجاد می‌کند
      if (isLoop) {
        // تعداد اسلایدهای واقعی
        const realSlides = slidesCount;
        // تعداد کل صفحات قابل نمایش
        const pages = Math.ceil(realSlides / slidePerView);
        setTotalSlides(pages);
      } else {
        setTotalSlides(Math.ceil(slidesCount / slidePerView));
      }
    }
  }, [galleryList.length, slidePerView]);

  // Responsive تنظیمات
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidePerView(1);
      } else if (window.innerWidth < 768) {
        setSlidePerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidePerView(3);
      } else {
        setSlidePerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // محاسبه صفحه فعلی بر اساس index و slidePerView
  const getCurrentPage = () => {
    if (totalSlides === 0) return 0;
    return Math.floor(galleryIndex / slidePerView);
  };

  return (
    <div className="w-full ">
      <LandingSectionsTitle isBetween openLink="/gallery" title="گالری تصاویر" />
      <div className="flex items-center justify-between w-full">
        <Swiper
          onSlideChange={(swiper) => {
            setGalleryIndex(swiper.realIndex);
          }}
          className="w-full"
          modules={[Pagination, Navigation]}
          slidesPerView={slidePerView}
          loop={true}
          pagination={{ clickable: false }}
          spaceBetween={30}
          onSwiper={(sw) => {
            swiperRef.current = sw;
            const slidesCount = galleryList.length;
            const pages = Math.ceil(slidesCount / slidePerView);
            setTotalSlides(pages);
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {galleryList.map((item, _i) => {
            return (
              <SwiperSlide key={_i}>
                <GalleryItem index={_i} {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full flex items-center gap-x-4 justify-center">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-lg bg-[#0097A7] text-white hover:bg-[#00838f] transition-colors"
          aria-label="صفحه قبلی"
        >
          <ChevronRight size={20} />
        </motion.button>
        
        <div className="flex gap-x-2 sm:gap-x-3 items-center flex-wrap justify-center">
          {Array.from({ length: totalSlides }).map((_, pageIndex) => {
            const isActive = getCurrentPage() === pageIndex;
            return (
              <button
                key={pageIndex}
                onClick={() => {
                  if (swiperRef.current) {
                    // محاسبه slide index بر اساس صفحه
                    const targetSlide = pageIndex * slidePerView;
                    swiperRef.current.slideToLoop(targetSlide);
                  }
                }}
                className={`w-7 h-7 transition-all duration-200 rounded-lg text-center text-xs flex items-center justify-center ${
                  isActive
                    ? "bg-[#0097A7] text-white"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`برو به صفحه ${pageIndex + 1}`}
              >
                {convertToFarsiNumbers(String(pageIndex + 1))}
              </button>
            );
          })}
        </div>
        
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-lg bg-[#0097A7] text-white hover:bg-[#00838f] transition-colors"
          aria-label="صفحه بعدی"
        >
          <ChevronLeft size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default GallerySection;

const GalleryItem = ({
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
    <motion.div 
      className="mt-4 transition-all duration-200 hover:scale-[1.02 ] cursor-pointer hover:shadow-[#00000050] shadow-[0px_0px_15px_2px] shadow-[#0000002f] w-full pb-3 flex flex-col rounded-xl overflow-hidden mb-8"
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full h-[280px]">
        <Image
          unoptimized
          src={imageLink}
          alt={title}
          fill
          className="object-cover object-center rounded-t-xl"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="flex flex-col items-start gap-y-1 px-5 mt-4">
        <h1 className="font-bold text-lg sm:text-xl text-neutral-800 line-clamp-1">
          {title}
        </h1>
        <div className="flex items-center gap-3 font-thin text-sm mt-1 w-full flex-wrap">
          <span className="flex items-center gap-x-2 rounded-lg p-2 bg-neutral-200 w-fit">
            <Tag size={15} color="#0097A7" />
            <p className="inline">{tag}</p>
          </span>
          <span className="flex items-center gap-x-1">
            <CalendarRange size={15} color="#0097A7" />
            <p className="inline">
              تاریخ: {convertToFarsiNumbers(date)}
            </p>
          </span>
        </div>
      </div>
    </motion.div>
  );
};