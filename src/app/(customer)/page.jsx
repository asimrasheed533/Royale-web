"use client";
import React, { useEffect, useState } from "react";
import "@/style/home.scss";
import s_banner from "@/public/s_banner.png";
import banner from "@/public/banner_1.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
export default function page() {
  return (
    <>
      <div className="page__title__row">
        <div className="page__title__col">
          <Image className="page__title__col__img" src={s_banner} alt="food" />
        </div>
        <div className="page__title__col">
          <div className="page__title__col__heading">Open</div>
          <div className="page__title__col__subheading">
            Take any order at the moment
          </div>
        </div>
        <div className="page__title__col">
          <Image className="page__title__col__img" src={s_banner} alt="food" />
        </div>
      </div>
      <Swiper
        className="Swiper__container"
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <Image className="page__banner__img" src={banner} alt="food" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="page__banner__img" src={banner} alt="food" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="page__banner__img" src={banner} alt="food" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
