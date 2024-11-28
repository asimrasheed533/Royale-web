"use client";
import React, { useEffect, useState } from "react";
import "@/style/home.scss";
import s_banner from "@/public/s_banner.png";
import banner from "@/public/banner_1.jpg";
import banner_2 from "@/public/banner_2.jpg";
import fast01 from "@/public/fast01.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
export default function page() {
  const products = [
    {
      id: 1,
      title: "Family Platter",
      subtitle: "1 whole Chicken, 5 Wings",
      price: 30.2,
      imageSrc: banner,
    },
    {
      id: 2,
      title: "Veggie Delight",
      subtitle: "2 Veggie Wraps, Fries",
      price: 35.5,
      imageSrc: banner_2,
    },
    {
      id: 3,
      title: "Veggie Delight",
      subtitle: "2 Veggie Wraps, Fries",
      price: 35.5,
      imageSrc: banner_2,
    },
    {
      id: 4,
      title: "Veggie Delight",
      subtitle: "2 Veggie Wraps, Fries",
      price: 35.5,
      imageSrc: banner,
    },
  ];

  return (
    <>
      <div className="page__title__row">
        <div className="page__title__col">
          <Image
            className="page__title__col__img"
            width={1000}
            height={70}
            src="/s_banner.png"
            alt="food"
          />
        </div>
        <div className="page__title__col">
          <div className="page__title__col__heading">Open</div>
          <div className="page__title__col__subheading">
            Take any order at the moment
          </div>
        </div>
        <div className="page__title__col">
          <Image
            width={1000}
            height={170}
            className="page__title__col__img"
            src={s_banner}
            alt="food"
          />
        </div>
      </div>
      <Swiper
        className="Swiper__container"
        modules={[Navigation]}
        navigation={true}
      >
        <SwiperSlide>
          <Image
            width={1000}
            height={500}
            className="page__banner__img"
            src={banner}
            alt="food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1000}
            height={100}
            className="page__banner__img"
            src={banner}
            alt="food"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1000}
            height={100}
            className="page__banner__img"
            src={banner}
            alt="food"
          />
        </SwiperSlide>
      </Swiper>
      <div className="product__container">
        <div className="product__main__text__title">Most Popular Food</div>

        <div className="product__main__cards">
          {products.map((product) => (
            <div key={product.id} className="product__main__card">
              <div className="product__main__card__img">
                <Image
                  width={100}
                  height={100}
                  className="product__main__card__img__image"
                  src={product.imageSrc}
                  alt={product.title}
                />
              </div>
              <div className="product__main__card__title">{product.title}</div>
              <div className="product__main__card__sub__title">
                {product.subtitle}
              </div>
              <div className="product__main__card__price__warper">
                <div className="products__price">
                  ${product.price.toFixed(2)}
                </div>
                <button className="products__add">
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fast__delivery__warper">
        <div className="fast__delivery__entry">
          <div className="fast__delivery__entry__svg">
            <Image width={100} height={100} src={fast01} alt="fastFood" />
          </div>
          <div className="fast__delivery__entry__title">Fast Delivery</div>
          <div className="fast__delivery__entry__subTitle">
            Fastest Delivery
          </div>
        </div>
        <div className="fast__delivery__entry">
          <div className="fast__delivery__entry__svg">
            <Image width={100} height={100} src={fast01} alt="fastFood" />
          </div>
          <div className="fast__delivery__entry__title">
            Easy Payment Method
          </div>
          <div className="fast__delivery__entry__subTitle">
            Fastest Delivery
          </div>
        </div>
        <div className="fast__delivery__entry">
          <div className="fast__delivery__entry__svg">
            <Image src={fast01} width={100} height={100} alt="fastFood" />
          </div>
          <div className="fast__delivery__entry__title">Fast Delivery</div>
          <div className="fast__delivery__entry__subTitle">
            Fastest Delivery
          </div>
        </div>
      </div>
    </>
  );
}
