"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BlogCard, ButtonSwiper } from "@/components";
import { useTranslations } from "next-intl";
import { articleItems } from "@/data";

export const ArticleSwiper = () => {
  const t = useTranslations("Article");

  return (
    <Swiper spaceBetween={12} slidesPerView={1}>
      {articleItems.map((item) => (
        <SwiperSlide key={item.id}>
          <BlogCard
            imgUrl={item.imgUrl}
            title={t(item.title)}
            desc={t(item.desc)}
          />
        </SwiperSlide>
      ))}
      <ButtonSwiper />
    </Swiper>
  );
};
