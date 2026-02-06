"use client";

import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { CalendarRange, Code2Icon } from "lucide-react";
import Image from "next/image";

export default function News() {
  return (
    <div className="w-[90%] flex items-start gap-5 mx-auto text-black">
      <section className="flex flex-col items-start gap-y-3">
        <div className="flex items-center gap-x-2">
          <div className="bg-blue-600 h-7 w-2 rounded-xs"></div>
          <h1 className="font-bold text-xl">داغ‌ترین اخبار</h1>
        </div>
        <div className="flex flex-col gap-y-3">
          {[1, 2, 3, 4, 5].map((v) => {
            return <HotestNewsContainer key={v} />;
          })}
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <div className="bg-blue-600 h-7 w-2 rounded-xs"></div>
          <h1 className="font-bold text-xl">همه‌ی اخبار</h1>
        </div>
        <div className="flex items-start gap-x-5 mt-5">
          <ModernFirstNewsContainer />
        </div>
      </section>
    </div>
  );
}

function HotestNewsContainer() {
  return (
    <div className="flex items-center gap-x-3 mt-2">
      <div
        style={{
          backgroundImage:
            "url(https://images.chesscomfiles.com/uploads/v1/news/1901934.5e98864e.630x354o.a13475267dc8@2x.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded-md w-[180px] h-[180px] overflow-hidden"
      ></div>
      <div className="flex flex-col items-start gap-y-2">
        <h1 className="text-black text-lg font-bold leading-relaxed w-[350px]">
          برترین زن شطرنج باز دنیا، از عرصه‌ی شطرنج خداحافظی کرد
        </h1>
        <h3 className="text-slate-800 text-md font-bold leading-[29px] w-[350px] ">
          جودیت پولگار، اسطوره شطرنج جهان و برترین شطرنج‌باز زن تمام ادوار، به
          صورت رسمی از رقابت‌های حرفه‌ای خداحافظی کرد.
        </h3>
        <div className="flex text-slate-800 items-center gap-x-2">
          <CalendarRange size={18} className="-mt-1" />
          <h5 className="text-sm font-thin">
            {convertToFarsiNumbers("39 اردیبهشت")}
          </h5>
        </div>
      </div>
    </div>
  );
}

function ModernFirstNewsContainer() {
  return (
    <div className="relative cursor-pointer group w-[700px] h-[450px] rounded-md overflow-hidden">
      <div
        style={{
          backgroundImage:
            "url(https://static.digiato.com/digiato/2026/02/DigiPics-Apple-iPhone16e-05.jpg-791x482.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="z-1 group-hover:scale-[1.05] transition-all duration-500 w-full h-[450px]"
      ></div>
      <div className="absolute w-full h-[450px] top-0 right-0 bg-linear-to-b to-70% from-[#fff0] to-[#000dff21] z-2"></div>
      <div className="px-4 py-2 z-3 backdrop-blur-sm border border-slate-300 text-sm rounded-full text-white absolute top-5 right-5 flex items-center gap-x-2">
      <Code2Icon size={18}/>
       تکنولوژی
      </div>
      <div className="z-4 absolute bottom-5 right-5 left-5 w-full h-auto text-white flex flex-col gap-y-3">
        <h1 className="text-2xl font-bold leading-[30px]">
          اپل احتمال دارد تا هفته ی آینده آیفون 18 عرضه کند
        </h1>
        <h1 className="text-md leading-[30px] font-thin text-slate-100">
          آیفون جدید ارزان قیمت اپل تراشه A19 و مودم جدید c1x را نیز دریافت
          میکند
        </h1>
        <div className="z-3 text-white  flex items-center gap-x-2">
          <div
            style={{
              backgroundImage:
                "url(https://digiato.com/wp-content/uploads/avatars/308816-1770357878-32x32.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-full w-7 h-7"
          ></div>
          <h1 className=" font-thin text-md">نوشته شده توسط پارسا شعبانی</h1>|
          <h1 className=" font-thin text-md">
            {convertToFarsiNumbers("11 ساعت پیش")}
          </h1>
        </div>
      </div>
    </div>
  );
}
