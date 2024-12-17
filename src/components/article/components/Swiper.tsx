"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BlogCard } from "@/components";
import { useTranslations } from "next-intl";
import { articleItems } from "@/data";

export const ArticleSwiper = () => {
  const t = useTranslations("Article");

  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1.5}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {articleItems.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogCard
            horizontal
            imgUrl={item.imgUrl}
            title={t(item.title)}
            desc={t(item.desc)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
