"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";
import { BlogCard, ButtonSwiper } from "@/components";
import { newsItems } from "@/data";

export const NewsSwiper = () => {
  const t = useTranslations("News");

  return (
    <Swiper modules={[Navigation]} spaceBetween={12} slidesPerView={1}>
      {newsItems.map((item) => (
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
