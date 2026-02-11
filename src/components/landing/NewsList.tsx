"use client";

import LandingSectionsTitle from "@/src/ui/landingSectionsTitle";
import { LucideNewspaper, Menu, Star } from "lucide-react";
import { useState } from "react";

export default function NewsList() {
  const fakeNews = [
    { title: "پارسا شعبانی نفر چهارم مسابقات شد", mode: "star" },
    { title: "مهراب رخ‌ربین نفر اول شد", mode: "normal" },
    { title: "پارسا شعبانی نفر چهارم مسابقات شد", mode: "star" },
    { title: "مهراب رخ‌ربین نفر اول شد", mode: "normal" },
    { title: "پارسا شعبانی نفر چهارم مسابقات شد", mode: "star" },
    { title: "مهراب رخ‌ربین نفر اول شد", mode: "normal" },
    { title: "پارسا شعبانی نفر چهارم مسابقات شد", mode: "star" },
    { title: "مهراب رخ‌ربین نفر اول شد", mode: "normal" },
  ];
  
  const [filterIndex, setFilterIndex] = useState<number>(0);
  
  return (
    <div className="w-full xl:w-[350px] flex flex-col gap-y-5">
      <div className="opacity-0 hidden xl:block">
        <LandingSectionsTitle title="" />
      </div>
      
      <div className="w-full mx-auto xl:w-[350px] xl:h-[500px] p-3 sm: p-4 rounded-xl border-t-3 border-t-[#0097A7] bg-[#f5f0f0] flex flex-col items-center gap-y-3">
        <h1 className="font-bold text-lg sm:text-xl text-[#0097A7] mt-2 sm:mt-3">
          لیست اخبار موجود
        </h1>
        
        <div className="flex items-center w-full px-1">
          {["جدیدترین‌ها", "داغ‌ترین‌ها", "پربازدید‌ترین‌ها"].map((item, index) => (
            <div
              key={index}
              onClick={() => setFilterIndex(index)}
              className={`text-xs sm:text-sm cursor-pointer font-bold w-full transition-colors duration-200 border-b-2 py-3 sm:py-4 text-center ${
                filterIndex === index
                  ? "border-[#0097A7] text-[#0097A7]"
                  : "border-neutral-400 text-black hover:text-[#0097A7]"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        
        <div className="mt-2 w-full flex flex-col gap-y-3 sm:gap-y-4 overflow-y-auto px-1">
          {fakeNews.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-x-2 sm:gap-x-3 text-neutral-700 font-medium text-sm sm:text-base hover:text-[#0097A7] transition-colors duration-200 cursor-pointer"
            >
              {item.mode === "star" ? (
                <Star size={14} className="sm:size-[15px] flex-shrink-0" />
              ) : (
                <Menu size={14} className="sm:size-[15px] flex-shrink-0" />
              )}
              <span className="line-clamp-1">{item.title}</span>
            </div>
          ))}
        </div>
        
        <h1 className="text-sm sm:text-lg cursor-pointer transition-colors duration-200 hover:text-black text-center flex items-center justify-center gap-x-2 font-bold text-[#0097A7]">
          <LucideNewspaper size={16} className="sm:size-[18px]" />
          مشاهده همه‌ی خبر‌ها
        </h1>
      </div>
    </div>
  );
}