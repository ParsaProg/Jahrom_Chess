"use client";

import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollUp, setScrollUp] = useState(true);
  let lastY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setScrollUp(false); // scrolling down → hide header
      } else {
        setScrollUp(true); // scrolling up → show header
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollUp;
}
