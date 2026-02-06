"use client";

import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { LucideNewspaper, Menu, Star } from "lucide-react";
import { useState } from "react";

export default function NewsList() {
  const fakeNews = [
    {
      title: "پارسا شعبانی نفر چهارم مسابقات شد",
      mode: "star",
    },
    {
      title: "مهراب رخ‌ربین نفر اول شد",
      mode: "normal",
    },
    {
      title: "پارسا شعبانی نفر چهارم مسابقات شد",
      mode: "star",
    },
    {
      title: "مهراب رخ‌ربین نفر اول شد",
      mode: "normal",
    },
    {
      title: "پارسا شعبانی نفر چهارم مسابقات شد",
      mode: "star",
    },
    {
      title: "مهراب رخ‌ربین نفر اول شد",
      mode: "normal",
    },
    {
      title: "پارسا شعبانی نفر چهارم مسابقات شد",
      mode: "star",
    },
    {
      title: "مهراب رخ‌ربین نفر اول شد",
      mode: "normal",
    },
    {
      title: "پارسا شعبانی نفر چهارم مسابقات شد",
      mode: "star",
    },
    {
      title: "مهراب رخ‌ربین نفر اول شد",
      mode: "normal",
    },
  ];
  const [filterIndex, setFilterIndex] = useState<number>(0);
  return (
    <div className="flex flex-col gap-y-5 ">
      <div className="opacity-0">
        <LandingSectionsTitle title="" />
      </div>
    <div className="relative w-[350px] h-[500px] p-2 rounded-xl border-t-3 border-t-[#0097A7] bg-[#f5f0f0] flex flex-col items-center gap-y-3">
        <h1 className="font-bold text-xl text-[#0097A7] mt-3">
          {" "}
          لیست اخبار موجود
        </h1>
        <div className="flex items-center w-full px-1">
          <div
            onClick={() => setFilterIndex(0)}
            className={`text-sm cursor-pointer font-bold w-full transition-colors duration-200 border-b-2  ${
              filterIndex === 0
                ? "border-[#0097A7] text-[#0097A7]"
                : "border-neutral-400 text-black"
            } py-4 text-center`}
          >
            جدیدترین‌ها
          </div>
          <div
            onClick={() => setFilterIndex(1)}
            className={`text-sm cursor-pointer font-bold w-full transition-colors duration-200 border-b-2  ${
              filterIndex === 1
                ? "border-[#0097A7] text-[#0097A7]"
                : "border-neutral-400 text-black"
            } py-4 text-center`}
          >
            داغ‌ترین‌ها
          </div>
          <div
            onClick={() => setFilterIndex(2)}
            className={`text-sm cursor-pointer font-bold w-full transition-colors duration-200 border-b-2  ${
              filterIndex === 2
                ? "border-[#0097A7] text-[#0097A7]"
                : "border-neutral-400 text-black"
            } py-4 text-center`}
          >
            پربازدید‌ترین‌ها
          </div>
        </div>
        <div className="mt-1 w-full flex flex-col gap-y-4">
          {fakeNews.map((item, _i) => {
            return (
              _i <= 7 && (
                <div
                  key={_i}
                  className="flex items-center gap-x-2 text-neutral-700 font-bold"
                >
                  {item.mode === "star" ? (
                    <Star size={15} />
                  ) : item.mode === "normal" ? (
                    <Menu size={15} />
                  ) : null}
                  {item.title}
                </div>
              )
            );
          })}
        </div>
         <h1 className="text-lg cursor-pointer transition-colors duration-200 hover:text-black text-center flex items-center justify-center gap-x-2 absolute bottom-5 font-bold text-[#0097A7] mt-3">
          <LucideNewspaper size={18}/>
         مشاهده همه‌ی خبر‌ها
        </h1>
      </div>
    </div>
  );
}
