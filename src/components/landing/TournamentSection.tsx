import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { CalendarRange } from "lucide-react";
import Image from "next/image";

export default function TournamentLandingSection() {
  return (
    <div className="w-full">
      <LandingSectionsTitle
        isBetween
        openLink="/tournaments"
        title={"گزارش مسابقات"}
      />
      
      {/* Main container - responsive height */}
      <div className="mt-5 flex flex-col lg:flex-row items-start gap-5 lg:gap-x-5">
        
        {/* Main feature article - full width on mobile, half on desktop */}
        <div className="relative w-full lg:w-[50%] h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
          <Image
            className="absolute rounded-xl w-full h-full object-cover object-top"
            draggable={false}
            width={800}
            height={800}
            unoptimized
            src="https://images.chesscomfiles.com/uploads/v1/news/1906086.4306076f.630x354o.2ad6790d4340@2x.png" // Placeholder - replace with actual image
            alt="برد علیرضا فیروزجا در مسابقات"
          />
          <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-green-600 text-white text-sm">
            شطرنج فیده
          </div>
          <div className="z-2 flex flex-col items-start gap-y-4 absolute bottom-0 right-0 left-0 bg-linear-to-t from-[#000000b3] to-transparent from-[80%] p-4 md:p-5">
            <h1 className="font-bold text-white text-lg md:text-xl leading-[30px] md:leading-[35px]">
              علیرضا فیروزجا مسابقات فیده را به آتش کشید
            </h1>
            <span className="w-full h-[0.3px] bg-neutral-200" />
            <h1 className="font-semibold text-white text-sm md:text-md leading-[30px] md:leading-[35px]">
              علیرضا فیروزجا در مسابقات فیده هم را شکست داد حتی مگنوس کارلسن
            </h1>
            <div className="text-white flex items-center gap-x-2">
              <CalendarRange size={16} className="md:w-[18px] md:h-[18px]" />
              <h5 className="text-xs md:text-sm">
                {convertToFarsiNumbers("تاریخ انتشار: 1404/09/08")}
              </h5>
            </div>
          </div>
        </div>

        {/* Secondary articles grid - full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col gap-y-2.5 md:gap-y-[10px]">
          
          {/* First secondary article */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-x-5">
            <div
              style={{
                backgroundImage: "url(https://dims.apnews.com/dims4/default/ae0dc39/2147483647/strip/true/crop/4000x2666+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd0%2Fea%2Fe5e11fbf0f5c260a281c6959af29%2F4bc14eada9484c03a9a88da0d8329e6a)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full md:w-[400px] h-[250px] md:h-[295px] rounded-xl"
            ></div>
            
            <div className="flex-1 flex flex-col gap-y-1 md:gap-y-2">
              <h5 className="text-xs md:text-sm text-neutral-800 font-bold">
                مسابقات شطرنج فیده
              </h5>
              <h1 className="font-bold text-lg md:text-xl">
                علیرضا فیروزجا مسابقات فیده را به آتش کشید
              </h1>
              <h1 className="font-semibold text-sm md:text-md mt-1 md:mt-2 line-clamp-2 md:line-clamp-none">
                علیرضا فیروزجا در مسابقات فیده هم را شکست داد حتی مگنوس کارلسن
              </h1>
              <div className="mt-1 flex items-center gap-x-2">
                <CalendarRange size={14} className="md:w-[18px] md:h-[18px]" />
                <h5 className="text-xs md:text-sm">
                  {convertToFarsiNumbers("تاریخ انتشار: 1404/09/08")}
                </h5>
              </div>
              
              <section className="flex items-center gap-x-2 mt-1 md:mt-2">
                <div
                  className="rounded-full w-8 h-8 md:w-10 md:h-10 border border-neutral-500"
                  style={{
                    backgroundImage: `url(/api/placeholder/40/40)`, // Placeholder - replace with actual image
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="text-neutral-800 text-xs md:text-md font-thin">
                  نوشته شده توسط{" "}
                  <strong className="font-bold text-black">
                    حمیدرضا قناعتیان
                  </strong>
                </h1>
              </section>
            </div>
          </div>

          {/* Second secondary article - reversed on desktop */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-4 md:gap-x-5 mt-2 md:mt-0">
            <div
              style={{
                backgroundImage: "url(https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/TarjeiJS/phpVTwBPb.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full md:w-[400px] h-[250px] md:h-[295px] rounded-xl"
            ></div>
            
            <div className="flex-1 flex flex-col gap-y-1 md:gap-y-2">
              <h5 className="text-xs md:text-sm text-neutral-800 font-bold">
                مسابقات شطرنج فیده
              </h5>
              <h1 className="font-bold text-lg md:text-xl">
                علیرضا فیروزجا مسابقات فیده را به آتش کشید
              </h1>
              <h1 className="font-semibold text-sm md:text-md mt-1 md:mt-2 line-clamp-2 md:line-clamp-none">
                علیرضا فیروزجا در مسابقات فیده هم را شکست داد حتی مگنوس کارلسن
              </h1>
              <div className="mt-1 flex items-center gap-x-2">
                <CalendarRange size={14} className="md:w-[18px] md:h-[18px]" />
                <h5 className="text-xs md:text-sm">
                  {convertToFarsiNumbers("تاریخ انتشار: 1404/09/08")}
                </h5>
              </div>
              
              <section className="flex items-center gap-x-2 mt-1 md:mt-2">
                <div
                  className="rounded-full w-8 h-8 md:w-10 md:h-10 border border-neutral-500"
                  style={{
                    backgroundImage: `url(https://www.chess.com/bundles/web/images/social/share-news.f0cb71ce.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <h1 className="text-neutral-800 text-xs md:text-md font-thin">
                  نوشته شده توسط{" "}
                  <strong className="font-bold text-black">
                    حمیدرضا قناعتیان
                  </strong>
                </h1>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}