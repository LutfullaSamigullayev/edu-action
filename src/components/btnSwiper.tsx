"use client";

import { Icons } from "@/icons";
import { useSwiper } from "swiper/react";

export const ButtonSwiper = () => {
  const swiper = useSwiper();

  return (
    <div className="mt-3 flex items-center justify-center gap-x-3">
      <div className="w-14 h-14 flex items-center justify-center rounded-full border-[0.7px] border-blackberry rotate-180">
        <button onClick={() => swiper.slidePrev()}>
          <Icons.swiperNext />
        </button>
      </div>
      <div className="w-14 h-14 flex items-center justify-center rounded-full border-[0.7px] border-blackberry">
        <button onClick={() => swiper.slideNext()}>
          <Icons.swiperNext />
        </button>
      </div>
    </div>
  );
};
