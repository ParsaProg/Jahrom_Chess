"use client";

import Logo from "@/public/svg/logo.svg";
import { Code2, Menu, PhoneCall, Search } from "lucide-react";
import Image from "next/image";
import convertToFarsiNumbers from "../../functions/EnToFnNumbers";
import useScrollDirection from "@/src/hooks/useScrollDirection";
import { motion } from "framer-motion";
import Link from "next/link";
import HeaderMenu from "../HeaderMenu/Menu";

export default function Header() {
  const scrollUp = useScrollDirection();
  return (
    <>
      <motion.div
        animate={{
          y: scrollUp ? 0 : -100,
          opacity: scrollUp ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="bg-[#ffffffdd] backdrop-blur-sm w-full min-[1357px]:flex hidden fixed z-[100000] top-0 right-0 border-b border-b-neutral-100"
      >
        <MainHeaderContent />
      </motion.div>
      <div className="bg-[#ffffffdd] backdrop-blur-sm w-full fixed max-[1357px]:flex hidden z-[100000] top-0 right-0 border-b border-b-neutral-300">
        <MainHeaderContent />
      </div>
    </>
  );
}

const MainHeaderContent = () => {
  return (
    <div className=" w-[90%] mx-auto py-3 flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-x-2">
        <Image
          width={800}
          height={800}
          alt={"هیات شطرنج جهرم"}
          src={Logo.src}
          draggable={false}
          className="min-[1220px]:w-28 w-16"
        />
        <h1 className="font-bold min-[1220px]:text-2xl text-xl">
          هیات شطرنج <strong className="text-blue-600">جهرم</strong>
        </h1>
      </Link>
      <div className="flex items-center max-[1357px]:gap-x-2 gap-x-5">
        <div className="min-[1220px]:flex hidden group relative w-[300px] p-3 rounded-xl bg-slate-100 border border-slate-200">
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
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="text-neutral-800 max-[1220px]:flex hidden items-center p-3 rounded-xl border border-neutral-300"
        >
          <Search size={20} />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="min-[1357px]:flex hidden p-3 rounded-xl items-center gap-x-2 text-blue-600 border border-neutral-300 font-thin"
        >
          {convertToFarsiNumbers("09173915784")} <PhoneCall size={18} />
        </motion.button>{" "}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="min-[1357px]:flex hidden p-3 rounded-xl items-center gap-x-2 bg-blue-600 text-white font-thin"
        >
          <Code2 />
          دربارۀ برنامه‌نویس
        </motion.button>
        <HeaderMenu />
      </div>
    </div>
  );
};
