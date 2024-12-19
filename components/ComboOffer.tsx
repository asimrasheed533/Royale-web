"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
export default function ComboOffer() {
  const [swiperSlides, setSwiperSlides] = React.useState(2);
  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(2);
    } else if (window.innerWidth > 1200) {
      setSwiperSlides(1.8);
    } else if (window.innerWidth > 900) {
      setSwiperSlides(1.5);
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
      <div className="combo__container">
        <div className="combo__container__inner">
          <div className="combo__container__inner__text">
            <div className="combo__container__inner__text__title">
              eat freely without worrying about the price
            </div>
            <div className="combo__container__inner__text__subTitle">
              Special Combo Offer
            </div>
          </div>
          <div className="combo__arrow">
            <button className="combo__arrow__col__pre">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 8H1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 15L1 8L8 1"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="combo__arrow__col__next">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8L15 8"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 1L15 8L8 15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".combo__arrow__col__pre",
            nextEl: ".combo__arrow__col__next",
          }}
          slidesPerView={swiperSlides}
          spaceBetween={20}
          className="combo__container__slider"
        >
          <SwiperSlide>
            <ComboSwiperCard />
          </SwiperSlide>
          <SwiperSlide>
            <ComboSwiperCard />
          </SwiperSlide>
          <SwiperSlide>
            <ComboSwiperCard />
          </SwiperSlide>
          <SwiperSlide>
            <ComboSwiperCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

function ComboSwiperCard({}) {
  return (
    <div className="combo__container__slider__card__upper">
      <div className="combo__container__slider__card">
        <div className="combo__container__slider__card__bg" />
        <div className="combo__container__slider__card__content">
          <div className="combo__container__slider__card__title">
            Fried Chicken & Cake Combo
          </div>
          <div className="combo__container__slider__card__sub__title">
            Lorem ipsum dolor sit, Lorem ipsum dolor sit, Lorem ipsum dolor sit,
            Lorem ipsum dolor sit,
          </div>
          <div className="combo__container__slider__card__entry">
            2 Pieces Of Fried Chicken
          </div>
          <div className="combo__container__slider__card__entry">
            2 Pieces Of Fried Chicken
          </div>
          <div className="combo__container__slider__card__entry">
            2 Pieces Of Fried Chicken
          </div>
          <div className="combo__container__slider__card__entry">
            2 Pieces Of Fried Chicken
          </div>
          <button className="combo__container__slider__card__button">
            Add TO Cart Combo
          </button>
        </div>
        <div className="combo__container__slider__card__img">
          <Image
            className="combo__container__slider__card__img__image"
            src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1734593922/image_2118_b1phig.png"
            alt="food"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="combo__container__slider__card__price">Rs: 1400.50</div>
    </div>
  );
}
