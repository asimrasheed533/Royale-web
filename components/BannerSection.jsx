"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function BannerSection() {
  const router = useRouter();
  const [swiperSlides, setSwiperSlides] = React.useState(3);
  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(2.2);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(1.3);
    } else if (window.innerWidth > 900) {
      setSwiperSlides(1);
    } else {
      setSwiperSlides(1);
    }
  };
  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [swiperSlides]);
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
            src="/s_banner.png"
            alt="food"
          />
        </div>
      </div>
      <Swiper
        className="Swiper__container"
        modules={[Navigation]}
        navigation={true}
        slidesPerView={swiperSlides}
        spaceBetween={10}
        // centeredSlides={true}
      >
        <SwiperSlide>
          <SlideCard
            image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1734540904/image_2110_mn8txv.png"
            title="Super Discount"
            heading="Up To 50% Off"
            subtitle="Off All Products"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard
            image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1734540905/image_2111_hhkbzh.png"
            title="Royal Fast Food App"
            heading="Order Quickly & Easily"
            subtitle="Fast Delivery"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard
            image="/banner_1.jpg"
            title="Crazy Beefy Burgers"
            heading="Quality Ingredients."
            subtitle="Quality Burgers."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard
            image="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1734540906/image_2112_sllxzw.png"
            title="Crazy Beefy Burgers"
            heading="Quality Ingredients."
            subtitle="Quality Burgers."
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

function SlideCard({ image, title, heading, subtitle }) {
  return (
    <div className="page__banner__img__warper">
      <Image
        width={1200}
        height={500}
        className="page__banner__img"
        src={image}
        alt="food"
      />
      <div className="page__banner__text__warper">
        <div className="page__banner__text__title">{title}</div>
        <div className="page__banner__text__heading">{heading}</div>
        <div className="page__banner__text__heading">{subtitle}</div>
        <div className="banner__button">
          <button
            onClick={() => router.push("/order")}
            className="banner__button__btn"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
