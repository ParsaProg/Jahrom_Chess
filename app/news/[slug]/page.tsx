"use client";

import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { ChessNews, ChessNewsModelInterface } from "@/src/model/chess-news";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewsDetailsPage() {
  const [newsData, setNewsData] = useState<ChessNewsModelInterface>();
  const params = useParams();
  useEffect(() => {
    const newsData1: ChessNewsModelInterface[] = ChessNews;
    const mainNewsDataWithSlug = newsData1.find(
      (news) => news.id === Number(params.slug),
    );
    setNewsData(mainNewsDataWithSlug!);
  }, []);
  return newsData !== undefined ? <div className="w-[90%] mx-auto flex flex-col gap-y-5 mt-5">
    <div className="w-full flex items-center gap-x-5">
      <div className="flex flex-col items-start gap-y-3 w-[40%]">
        <div className="text-blue-600 font-thin text-xl rounded-xl px-4 py-2 border border-blue-600">{newsData.cat}</div>
        <h1 className="font-bold text-5xl leading-[65px]">{newsData.title}</h1>
        <h2 className="font-thin text-neutral-800 text-xl leading-[35px]">{newsData.description}</h2>
        <div className="flex items-center gap-x-2">
          <div style={{
            backgroundImage: `url(${newsData.picture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} className="rounded-full w-12 h-12 border border-neutral-300 mt-2"></div>
          <section className="flex flex-col gap-y-1">
            <h1 className="font-thin text-neutral-800 text-sm">نوشته شده توسط حمیدرضا قناعتیان</h1>
            <h1 className="font-thin text-neutral-800 text-sm">تاریخ انتشار: {convertToFarsiNumbers(newsData.date.toString())}</h1>
          </section>
        </div>
      </div>
      <Image unoptimized width={800} height={800} className="rounded-xl w-[60%] h-auto" src={newsData.picture} alt={newsData.title} />
    </div>
  </div>: <h1 className="text-center font-bold">در حال دریافت اطلاعات مقاله</h1>;
}
