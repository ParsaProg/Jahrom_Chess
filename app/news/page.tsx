import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { RegularNewsContainer } from "@/src/interfaces/regular-news-card";
import { ChessNews, ChessNewsModelInterface } from "@/src/model/chess-news";
import { CalendarRange, Captions, Code2Icon } from "lucide-react";
import Link from "next/link";

export default function News() {
  return (
    <div className="w-[90%] flex flex-col lg:flex-row items-start gap-5 mx-auto text-black">
      <section className="flex flex-col items-start gap-y-3 w-full lg:w-auto">
        <div className="flex items-center gap-x-2">
          <div className="bg-blue-600 h-7 w-2 rounded-xs"></div>
          <h1 className="font-bold text-xl">داغ‌ترین اخبار</h1>
        </div>
        <div className="flex flex-col gap-y-3 w-full">
          {ChessNews.toReversed().map((v, _I) => {
            return _I <= 5 && <HotestNewsContainer {...v} key={_I} />;
          })}
        </div>
      </section>
      <section className="flex flex-col w-full">
        <div className="flex items-center gap-x-2">
          <div className="bg-blue-600 h-7 w-2 rounded-xs"></div>
          <h1 className="font-bold text-xl">همه‌ی اخبار</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start gap-5 mt-5">
          <ModernFirstNewsContainer {...ChessNews[0]} />
          <RegularNewsContainter {...ChessNews[1]} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
          {ChessNews.map((value, _I) => {
            return (
              _I > 1 && (
                <RegularNewsContainter {...value} isInGrid={true} key={_I} />
              )
            );
          })}
        </div>
      </section>
    </div>
  );
}

function HotestNewsContainer({
  id,
  title,
  date,
  picture,
}: {
  title: string;
  date: string;
  picture: string;
  id: number;
}) {
  return (
    <Link
      href={`/news/${id}`}
      className="flex items-center gap-x-3 mt-2 w-full"
    >
      <div
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-md w-20 sm:w-[100px] h-20 sm:h-[100px] shrink-0 overflow-hidden"
      ></div>
      <div className="flex flex-col items-start gap-y-2 flex-1 min-w-0">
        <h1 className="text-black text-base sm:text-lg font-bold leading-relaxed line-clamp-2">
          {title}
        </h1>
        <div className="flex text-slate-800 items-center gap-x-2">
          <CalendarRange size={18} className="-mt-1" />
          <h5 className="text-xs sm:text-sm font-thin">
            {convertToFarsiNumbers(date)}
          </h5>
        </div>
      </div>
    </Link>
  );
}

function ModernFirstNewsContainer({
  id,
  title,
  description,
  picture,
  author,
  date,
  cat,
}: ChessNewsModelInterface) {
  return (
    <Link
      href={`/news/${id}`}
      className="relative cursor-pointer group w-full md:w-[70%] h-[350px] sm:h-[400px] md:h-[450px] rounded-md overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="z-1 group-hover:scale-[1.05] transition-all duration-500 w-full h-full"
      ></div>
      <div className="absolute w-full h-full top-0 right-0 bg-linear-to-b from-[#ffffff00] to-[#00000064] z-2"></div>
      <div className="px-3 py-1.5 sm:px-4 sm:py-2 z-3 backdrop-blur-sm border border-slate-300 text-xs sm:text-sm rounded-full text-white absolute top-3 sm:top-5 right-3 sm:right-5 flex items-center gap-x-2">
        <Captions size={16} className="sm:w-[18px] sm:h-[18px]" />
        {cat}
      </div>
      <div className="z-4 absolute bottom-3 sm:bottom-5 px-3 sm:px-5 w-full h-auto text-white gap-y-2 sm:gap-y-3">
        <div className="bg-[#03012799] text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-[24px] sm:leading-[30px] inline-block m-0 w-auto">
          {title}
        </div>
        <div className="bg-[#03012799] text-sm sm:text-md leading-[24px] sm:leading-[30px] font-thin inline-block m-0 text-slate-100 mb-2 sm:mb-3 hidden sm:inline-block">
          {description}
        </div>
        <div className="inline-block m-0 bg-[#03012799]">
          <div className="z-3 text-white m-0 flex items-center gap-x-2 flex-wrap">
            <div
              style={{
                backgroundImage:
                  "url(https://digiato.com/wp-content/uploads/avatars/308816-1770357878-32x32.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="rounded-full w-6 h-6 sm:w-7 sm:h-7"
            ></div>
            <h1 className="font-thin text-xs sm:text-sm">
              نوشته شده توسط {author}
            </h1>
            |
            <h1 className="font-thin text-xs sm:text-sm">
              {convertToFarsiNumbers(date.toString())}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

function RegularNewsContainter({
  id,
  isInGrid,
  title,
  description,
  picture,
  author,
  date,
  cat,
}: RegularNewsContainer) {
  return (
    <Link
      href={`/news/${id}`}
      className={`flex flex-col items-start ${isInGrid ? "w-full" : "w-full md:w-[40%]"} h-auto gap-y-3`}
    >
      <div
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full rounded-md h-[200px] sm:h-[250px]"
      ></div>
      <h1 className="font-bold text-base sm:text-lg line-clamp-2">{title}</h1>
      <h3 className="text-sm sm:text-md text-neutral-800 line-clamp-3">
        {description}
      </h3>
      <div className="flex items-center gap-x-2 flex-wrap">
        <div
          style={{
            backgroundImage:
              "url(https://digiato.com/wp-content/uploads/avatars/308816-1770357878-32x32.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-full w-6 h-6 sm:w-7 sm:h-7"
        ></div>
        <h1 className="font-thin text-xs sm:text-sm">
          نوشته شده توسط {author}
        </h1>
        |
        <h1 className="font-thin text-xs sm:text-sm">
          {convertToFarsiNumbers(date)}
        </h1>
      </div>
    </Link>
  );
}
