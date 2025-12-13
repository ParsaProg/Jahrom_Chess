"use client";

import {
  ChessKingIcon,
  Image,
  PhoneIncomingIcon,
  Star,
  Users2Icon,
} from "lucide-react";
import { motion } from "framer-motion";
import useScrollDirection from "@/src/hooks/useScrollDirection";

export default function MenuHeader() {
    const scrollUp = useScrollDirection();
  return (
    <motion.div animate={{
        top: scrollUp ? "128px" : 0,
      }}    
      transition={{ duration: 0.3 }} className="z-100000 bg-[#ffffffa1] backdrop-blur-sm fixed top-32 w-full border-b border-t border-b-neutral-300 border-t-neutral-300">
      <div className="py-3 w-[90%] flex items-center mx-auto text-xl gap-x-5">
        <motion.div whileTap={{ scale: 0.95 }}>
          <div className="cursor-pointer flex items-center gap-x-2 transition-all duation-200 hover:bg-blue-600 hover:text-white rounded-xl px-3 py-4">
            <Users2Icon />
            مشخصات اعضای هیات شطرنج
          </div>
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <div className="cursor-pointer flex items-center gap-x-2 transition-all duation-200 hover:bg-blue-600 hover:text-white rounded-xl px-3 py-4">
            <Star />
            درباره‌ی ما
          </div>{" "}
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }}>
          <div className="cursor-pointer flex items-center gap-x-3 transition-all duation-200 hover:bg-blue-600 hover:text-white rounded-xl px-3 py-4">
            <PhoneIncomingIcon className="-rotate-90" />
            تماس با هیات شطرنج
          </div>
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          {" "}
          <div className="cursor-pointer flex items-center gap-x-2 transition-all duation-200 hover:bg-blue-600 hover:text-white rounded-xl px-3 py-4">
            <ChessKingIcon />
            تاریخچه‌ی مسابقات جهرم
          </div>
        </motion.div>

        <motion.div whileTap={{ scale: 0.95 }}>
          <div className="cursor-pointer flex items-center gap-x-2 transition-all duation-200 hover:bg-blue-600 hover:text-white rounded-xl px-3 py-4">
            <Image />
            گالری تصاویر
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
