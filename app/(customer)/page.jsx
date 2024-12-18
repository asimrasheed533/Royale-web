"use client";
import "@/style/home.scss";
import React, { useEffect, useState } from "react";
import s_banner from "@/public/s_banner.png";
import banner from "@/public/banner_1.jpg";
import banner_2 from "@/public/banner_2.jpg";
import fast01 from "@/public/fast01.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
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
  const [swiperSlides, setSwiperSlides] = React.useState(3);
  const checkWidth = () => {
    if (window.innerWidth > 1366) {
      setSwiperSlides(1.8);
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
            src={s_banner}
            alt="food"
          />
        </div>
      </div>
      <Swiper
        className="Swiper__container"
        modules={[Navigation]}
        navigation={true}
        slidesPerView={swiperSlides}
        spaceBetween={20}
        centeredSlides={true}
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
