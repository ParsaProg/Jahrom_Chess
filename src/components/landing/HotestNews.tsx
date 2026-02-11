import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { CalendarRange } from "lucide-react";
import Image from "next/image";

export default function HotestNews() {
  return (
    <div className="flex flex-col items-start gap-y-5 w-full min-[777px]:max-w-[400px] mx-auto lg:mx-0">
      <LandingSectionsTitle title="داغ‌ترین خبر" />
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] rounded-xl overflow-hidden">
        <Image
          className="absolute rounded-xl w-full h-full object-cover"
          draggable={false}
          width={800}
          height={800}
          unoptimized
          src="https://images.chesscomfiles.com/uploads/v1/news/1906086.4306076f.630x354o.2ad6790d4340@2x.png"
          alt="برد علیرضا فیروزجا در مسابقات"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-green-600 text-white text-xs sm:text-sm">
          شطرنج فیده
        </div>
        <div className="absolute bottom-3 right-3 left-3 sm:bottom-4 sm:right-4 sm:left-4 flex flex-col items-start gap-y-3 sm:gap-y-4 backdrop-blur-sm bg-[#0000008a] rounded-lg p-3 sm:p-5">
          <h1 className="font-bold text-white text-base sm:text-lg md:text-xl leading-tight sm:leading-[35px]">
            علیرضا فیروزجا مسابقات فیده را به آتش کشید
          </h1>
          <span className="w-full h-[0.3px] bg-neutral-200" />
          <h1 className="font-semibold text-white text-sm sm:text-base md:text-md leading-tight sm:leading-[35px]">
            علیرضا فیروزجا در مسابقات فیده هم را شکست داد حتی مگنوس کارلسن
          </h1>
          <div className="text-white flex items-center gap-x-2">
            <CalendarRange size={16} className="sm:size-[18px]" />
            <h5 className="text-xs sm:text-sm">{convertToFarsiNumbers("تاریخ انتشار: 1404/09/08")}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}