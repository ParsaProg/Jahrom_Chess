"use client";

import convertToFarsiNumbers from "@/src/functions/EnToFnNumbers";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChessKingIcon,
  Code2,
  Image,
  Menu,
  Newspaper,
  PhoneCall,
  PhoneIncomingIcon,
  Star,
  Users2Icon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HeaderMenu = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [showMenu, setShowMenu]);
  return (
    <div className="relative max-[1357px]:block hidden ">
      <motion.button
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center p-3 rounded-xl border border-neutral-300"
      >
        <Menu size={20} />
      </motion.button>
      <AnimatePresence mode="wait">
        {showMenu && (
          <motion.div
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, scale: 0.9, top: 0 },
              visible: { opacity: 1, scale: 1, top: "55px" },
            }}
            transition={{ duration: 0.2 }}
            className="absolute top-[55px] bg-white left-0 w-[230px] px-1 py-1 rounded-xl border border-neutral-300 flex flex-col"
          >
            <Link href={"/news"} className="p-3 rounded-lg bg-transparent flex items-center gap-x-2 transition-all duration-300 hover:bg-slate-100">
              <Newspaper size={20} />
              مشاهدۀ اخبار
            </Link>
            <div className="p-3 rounded-lg bg-transparent flex items-center gap-x-2 transition-all duration-300 hover:bg-slate-100">
              <Users2Icon size={20} />
              مشخصات اعضای هیات
            </div>
            <div className="p-3 rounded-lg bg-transparent flex items-center gap-x-2 transition-all duration-300 hover:bg-slate-100">
              <Star size={20} />
              درباره‌ی ما
            </div>
            <div className="p-3 rounded-lg bg-transparent flex items-center gap-x-2 transition-all duration-300 hover:bg-slate-100">
              <ChessKingIcon size={20} />
              تاریخچه‌ی مسابقات
            </div>
            <div className="p-3 rounded-lg bg-transparent flex items-center gap-x-2 transition-all duration-300 hover:bg-slate-100">
              <Image size={20} />
              گالری تصاویر
            </div>
            <hr className="border-neutral-300" />
            <div className="p-3 rounded-lg bg-transparent flex items-center gap-x-2 transition-all duration-300 hover:bg-slate-100 text-blue-600">
              <PhoneCall size={18} />
              {convertToFarsiNumbers("09173915784")}
            </div>
            <div className="p-3 rounded-lg flex items-center gap-x-2 transition-all duration-300 bg-blue-600 text-white">
              <Code2 />
              دربارۀ برنامه‌نویس
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderMenu;
