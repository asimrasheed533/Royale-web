"use client";
import React, { useEffect, useState } from "react";
import "@/style/home.scss";
import s_banner from "@/public/s_banner.png";
import banner from "@/public/banner_1.jpg";
// import banner_2 from "@/public/banner_2.jpg";
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
      <div className="product__container">
        <div className="product__main__text__title">Most Popular Food</div>

        <div className="product__main__cards">
          <div className="product__main__card">
            <div className="product__main__card__img">
              <Image
                className="product__main__card__img__image"
                src={banner}
                alt="fast food"
              />
            </div>
            <div className="product__main__card__title">Family Plater </div>
            <div className="product__main__card__sub__title">
              1 whole Chicken, 5 Wings
            </div>
            <div className="product__main__card__price__warper">
              <div className="products__price">$ 50.20</div>
              <div className="products__add">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
