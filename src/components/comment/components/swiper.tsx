"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import { commentItems } from "@/data";
import { PersonComment } from "./person";

export const CommentSwiper = () => {
  const t = useTranslations("Comment");

  return (
    <Swiper slidesPerView={1}>
      {commentItems.map((item) => (
        <SwiperSlide key={item.id}>
          <PersonComment
            key={item.id}
            imgUrl={item.imgUrl}
            person={t(item.person)}
            university={t(item.university)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
