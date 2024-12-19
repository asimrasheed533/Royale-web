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
        <div className="combo__bg__svg__upper">
          <svg
            width="170"
            height="203"
            viewBox="0 0 100 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.7502 72.82C93.6702 72.96 87.6802 72.16 81.7202 71.11C56.7202 66.67 35.5702 55.16 18.3402 36.53C11.7902 29.45 6.2202 21.65 1.8202 13.05C0.710196 10.87 0.0101886 8.62997 0.640189 6.15997C1.45019 2.98997 3.44019 0.959968 6.64019 0.249968C9.77019 -0.450032 12.4102 0.529968 14.5002 2.92997C15.1202 3.63997 15.6002 4.48997 16.0602 5.31997C31.1402 32.98 54.2002 49.62 85.2102 55.33C90.0202 56.22 94.9002 56.45 99.7602 56.92V72.82H99.7502Z"
              fill="#F5A81C"
            />
          </svg>
        </div>
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
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 15L1 8L8 1"
                  stroke="currentColor"
                  strokeWidth="2"
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
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 1L15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
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
        <div className="combo__bg__svg__bottom">
          <svg
            width="171"
            height="124"
            viewBox="0 0 171 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.310499 8.17001C0.310499 6.25001 0.310499 4.32001 0.310499 2.40001C0.310499 0.580015 0.320498 0.570014 2.0505 0.970014C10.2505 2.88001 18.3805 5.09001 26.4205 7.59001C50.8205 15.18 74.2105 25.06 96.1805 38.19C113.11 48.31 128.69 60.17 142.37 74.42C152.51 84.99 161.23 96.62 168.34 109.44C168.81 110.28 169.25 111.14 169.68 112C171.76 116.21 170.751 120.23 167.111 122.27C163.301 124.4 158.6 123.23 156.23 119.46C154.98 117.47 153.901 115.36 152.721 113.33C144.381 98.98 133.81 86.46 121.51 75.36C104.43 59.96 85.1305 47.96 64.4005 38.15C44.4505 28.72 23.7305 21.48 2.3105 16.22C0.780499 15.85 0.130499 15.28 0.270499 13.65C0.420499 11.84 0.310499 10 0.310499 8.17001Z"
              fill="#F5A81C"
            />
          </svg>
        </div>
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
