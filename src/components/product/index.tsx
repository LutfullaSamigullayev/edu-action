"use client";

import { TitleSection } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslations } from "next-intl";
import { ProductCard } from "./components";
import { productItems } from "@/data";
import "swiper/css";

export const Product = () => {
  const t = useTranslations("Product");
  return (
    <section className="container_">
      <TitleSection title={t("title")} button btnTitle="all" orange2 />
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productItems.map((item) => (
          <ProductCard
            key={item.id}
            imgUrl={item.imgUrl}
            university={t(item.university)}
            location={t(item.location)}
            dergee={t(item.dergee)}
          />
        ))}
      </div>
      <div className="md:hidden">
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
      </div>
    </section>
  );
};
