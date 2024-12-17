"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { BlogCard } from "@/components";
import { newsItems } from "@/data";

export const NewsSwiper = () => {
  const t = useTranslations("News");

  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1.5}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {newsItems.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogCard
            imgUrl={item.imgUrl}
            title={t(item.title)}
            desc={t(item.desc)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
