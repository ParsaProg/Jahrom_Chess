"use client";

import Logo from "@/public/svg/logo.svg";
import { Code2, PhoneCall, Search, UsersRound } from "lucide-react";
import Image from "next/image";
import convertToFarsiNumbers from "../../functions/EnToFnNumbers";
import useScrollDirection from "@/src/hooks/useScrollDirection";
import { motion } from "framer-motion";

export default function Header() {
  const scrollUp = useScrollDirection();
  return (
  
    <motion.div animate={{
        y: scrollUp ? 0 : -100,
        opacity: scrollUp ? 1 : 0,
      }}
      transition={{ duration: 0.3 }} className="w-full sticky z-100000 top-0 right-0 border-b border-b-neutral-300">
      <div className="sm:w-[80%] w-[90%] mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Image
            width={800}
            height={800}
            alt={"هیات شطرنج شهرستان جهرم"}
            src={Logo.src}
            draggable={false}
            className="sm:w-28"
          />
          <h1 className="font-bold text-2xl">
            هیات شطرنج شهرستان <strong className="text-blue-600">جهرم</strong>
          </h1>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="group relative w-[300px] p-3 rounded-xl bg-slate-100 border border-slate-200">
            <div className="group-focus-within:ring-2 group-focus-within:ring-offset-4 group-focus-within:ring-blue-600 ring-offset-white absolute inset-0 rounded-xl -z-1 transition-all duration-200"></div>
            <div className="absolute right-3 top-[50%] translate-y-[-50%] text-neutral-800">
              <Search size={20} />
            </div>
            <input
              type="text"
              className="z-100 outline-none border-none bg-transparent pr-7 placeholder:text-neutral-800 w-full"
              placeholder="جستجو در میان اخبار..."
            />
          </div>
          <button className="p-3 rounded-xl flex items-center gap-x-2 text-blue-600 border border-neutral-300 font-thin">
            {convertToFarsiNumbers("09173915784")} <PhoneCall size={18} />
          </button>{" "}
          <button className="p-3 rounded-xl flex items-center gap-x-2 bg-blue-600 text-white font-thin">
            <Code2 />
            دربارۀ برنامه‌نویس
          </button>
        </div>
      </div>
    </motion.div>
  );
}
