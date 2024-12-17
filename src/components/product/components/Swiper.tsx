"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import { ProductCard } from "./CardProduct";
import { productItems } from "@/data";

export const ProductSwiper = () => {
  const t = useTranslations("Product");

  return (
    <Swiper
      spaceBetween={12}
      slidesPerView={1.5}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {productItems.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard
            imgUrl={item.imgUrl}
            university={t(item.university)}
            location={t(item.location)}
            dergee={t(item.dergee)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
