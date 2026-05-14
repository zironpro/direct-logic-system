"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

interface LogoRowProps {
  logos: string[];
  index: number;
  activeIndex: number;
}

// Client logo images
const clientLogos = [
  "/images/clients/client-1.jpg",
  "/images/clients/client-2.jpg",
  "/images/clients/client-3.jpg",
  "/images/clients/client-4.jpg",
  "/images/clients/client-5.jpg",
  "/images/clients/client-6.jpg",
  "/images/clients/client-7.jpg",
  "/images/clients/client-8.jpg",
  "/images/clients/client-9.jpg",
  "/images/clients/client-10.jpg",
  "/images/clients/client-11.jpg",
  "/images/clients/client-12.jpg",
  "/images/clients/client-13.jpg",
  "/images/clients/client-14.jpg",
  "/images/clients/client-15.jpg",
  "/images/clients/client-16.jpg",
  "/images/clients/client-17.jpg",
  "/images/clients/client-18.jpg",
  "/images/clients/client-19.jpg",
  "/images/clients/client-20.jpg",
  "/images/clients/client-21.jpg",
  "/images/clients/client-22.jpg",
  "/images/clients/client-23.jpg",
  "/images/clients/client-24.jpg",
  "/images/clients/client-25.jpg",
  "/images/clients/client-26.jpg",
  "/images/clients/client-27.jpg",
  "/images/clients/client-28.jpg",
  "/images/clients/client-29.jpg",
];

const items = [
  [clientLogos[0], clientLogos[1], clientLogos[2], clientLogos[3], clientLogos[4], clientLogos[5]],
  [clientLogos[6], clientLogos[7], clientLogos[8], clientLogos[9], clientLogos[10], clientLogos[11]],
  [clientLogos[12], clientLogos[13], clientLogos[14], clientLogos[15], clientLogos[16], clientLogos[17]],
  [clientLogos[18], clientLogos[19], clientLogos[20], clientLogos[21], clientLogos[22], clientLogos[23]],
  [clientLogos[24], clientLogos[25], clientLogos[26], clientLogos[27], clientLogos[28], clientLogos[0]],
  [clientLogos[1], clientLogos[2], clientLogos[3], clientLogos[4], clientLogos[5], clientLogos[6]],
];

export const ClientsLogos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    const intervalId = setInterval(() => setActiveIndex(nextIndex), 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);
  return (
    <div className="container relative w-full max-w-4xl">
      {items.map((logos, index) => (
        <LogoRow activeIndex={activeIndex} index={index} key={index} logos={logos} />
      ))}
    </div>
  );
};

export const MarqueeItem = React.memo(({ children }: { children: React.ReactNode }) => (
  <div className="mx-6 cursor-pointer text-brand-gray duration-300 ease-in-out hover:scale-105">{children}</div>
));

MarqueeItem.displayName = "MarqueeItem";

const LogoRow = ({ logos, index, activeIndex }: LogoRowProps) => {
  const isActive = index === activeIndex;

  return (
    <AnimatePresence>
      {isActive && (
        <div className="absolute inset-0 grid w-full grid-cols-3 items-center justify-center gap-6 px-4 md:gap-x-4 md:px-6 lg:grid-cols-6">
          {logos.map((logo, logoIndex) => (
            <motion.div
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              className="grid h-20 place-content-center overflow-hidden rounded-md bg-white p-3 shadow-sm"
              exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              key={logoIndex}
              transition={{
                duration: 1.5,
                type: "spring",
                delay: logoIndex * 0.15,
              }}
            >
              <Image
                alt={`Client logo ${logoIndex + 1}`}
                className="object-contain"
                fill
                priority={logoIndex < 2}
                src={logo}
              />
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
