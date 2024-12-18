"use client";
import "@/style/order.scss";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import ScrollSpy from "react-ui-scrollspy";
import burger from "@/public/burger.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css/navigation";
import ScrollTicket from "@/components/ScrollTicket";
const cartItem = [
  {
    id: 1,
    name: "Hot Mexican",
    img: burger,
    price: 50,
    count: 5,
  },
  {
    id: 2,
    name: "Cheese Burger",
    img: burger,
    price: 60,
    count: 3,
  },
  {
    id: 3,
    name: "Hot Mexican",
    img: burger,
    price: 50,
    count: 5,
  },
  {
    id: 4,
    name: "Cheese Burger",
    img: burger,
    price: 60,
    count: 3,
  },
  {
    id: 5,
    name: "Hot Mexican",
    img: burger,
    price: 50,
    count: 5,
  },
  {
    id: 6,
    name: "Cheese Burger",
    img: burger,
    price: 60,
    count: 3,
  },
];

const Categories = [
  { id: 1, name: "Burger", img: burger, scrollId: "f1" },
  { id: 2, name: "Pizza", img: burger, scrollId: "f2" },
  { id: 3, name: "Sushi", img: burger, scrollId: "f3" },
  { id: 4, name: "Pasta", img: burger, scrollId: "f4" },
  { id: 5, name: "Tacos", img: burger, scrollId: "f5" },
  { id: 6, name: "Salad", img: burger, scrollId: "f6" },
  { id: 7, name: "Steak", img: burger, scrollId: "f7" },
  { id: 8, name: "Fries", img: burger, scrollId: "f8" },
  { id: 9, name: "Sandwich", img: burger, scrollId: "f9" },
  { id: 10, name: "Donut", img: burger, scrollId: "f10" },
  { id: 11, name: "Ice Cream", img: burger, scrollId: "f11" },
  { id: 12, name: "Smoothie", img: burger, scrollId: "f12" },
  { id: 13, name: "Smoothie", img: burger, scrollId: "f13" },
  { id: 14, name: "Smoothie", img: burger, scrollId: "f14" },
  { id: 15, name: "Smoothie", img: burger, scrollId: "f15" },
];
const items = [
  {
    heading: "Most Popular",
    subheading: "A Collection of our popular foods",
    products: [
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
    ],
  },
  {
    heading: "Sale Products",
    subheading: "A Collection of our popular foods",
    products: [
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Family Platter",
        subtitle: "1 Whole Chicken, 5 Wings & 1 Bottle Soft Drink",
        price: "$23.89",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
      {
        title: "Double Burger Meal",
        subtitle: "2 Double Burgers, Fries & 2 Bottle Soft Drink",
        price: "$19.99",
        image: burger, // Your image source
        buttons: {
          favorite: "❤️",
          add: "Add",
        },
      },
    ],
  },
];

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  function checkNavOpen() {
    if (window.innerWidth <= 1200) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }
  useEffect(() => {
    checkNavOpen();

    window.addEventListener("resize", checkNavOpen);
  }, []);
  const scrollToSection = (e, offset = 0) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.split("#")[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let yOffset = 0;
      if (window.innerWidth >= 1220) {
        yOffset = -0;
      } else if (window.innerWidth >= 950) {
        yOffset = -195;
      } else {
        yOffset = -350;
      }
      const y =
        targetElement.getBoundingClientRect().top +
        window.scrollY +
        yOffset -
        offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollTicket />

      <div className="order__products__container__upper">
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            750: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 9,
            },
            1300: {
              slidesPerView: 12,
            },
          }}
        >
          {Categories.map((item) => (
            <SwiperSlide key={item.id}>
              <a
                className="order__products__container__content__warper"
                href={`#${item.scrollId}`}
                onClick={(e) => scrollToSection(e)}
              >
                <Image
                  width={100}
                  height={70}
                  src={item.img}
                  className="order__products__img"
                  alt="burger"
                />
                <div
                  className="order__products__container__content__upper__entry"
                  data-to-scrollspy-id={item.scrollId}
                >
                  {item.name}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="order__products__container__bottom">
        <ScrollSpy scrollThrottle={10} useBoxMethod={false} offsetTop={-250}>
          {items.map((item, itemIndex) => (
            <div
              id={`f${itemIndex + 1}`}
              className="order__products__card__warper"
              key={itemIndex}
            >
              <div className="order__products__card__text">
                <div className="order__products__card__heading">
                  {item.heading}
                </div>
                <div className="order__products__card__subheading">
                  {item.subheading}
                </div>
              </div>
              <div className="order__products__cards__container">
                {item.products.map((product, index) => (
                  <div className="order__products__card" key={index}>
                    <div className="order__products__card__col">
                      <div className="order__products__card__col__img">
                        <Image
                          width={100}
                          height={70}
                          src={product.image}
                          alt="fast food"
                          className="order__products__card__image"
                        />
                      </div>
                      <div className="order__products__card__col__text">
                        <div className="order__products__card__title">
                          {product.title}
                        </div>
                        <div className="order__products__card__subtitle">
                          {product.subtitle}
                        </div>
                        <div className="order__products__card__price">
                          {product.price}
                        </div>
                      </div>
                    </div>
                    <div className="order__products__card__frt__item">
                      <button className="order__products__card__col__frt">
                        {product.buttons.favorite}
                      </button>
                      <button className="order__products__card__col__add">
                        {product.buttons.add}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollSpy>
        <CartCard cartProducts={cartItem} />
      </div>
      <div className="order__footer">
        <div className="order__footer__bottom">
          <div className="order__footer__col">
            <div className="order__footer__title">Total</div>
            <div className="order__footer__price">$50.90</div>
            <div className="order__footer__item">1 item</div>
          </div>
          <div className="order__footer__col">
            <button
              onClick={() => setShowCart(!showCart)}
              className="order__footer__button"
            >
              Cart
            </button>
          </div>
        </div>

        {showCart && (
          <CartCard
            setShowCart={setShowCart}
            mobile={true}
            cartProducts={cartItem}
          />
        )}
      </div>
    </>
  );
}

function CartCard({ cartProducts, mobile, setShowCart }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 300,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className={`order__products__container__cart ${
        mobile ? "order__products__container__cart__mobile" : ""
      }`}
    >
      <button
        onClick={() => setShowCart(false)}
        className="order__products__container__cart__mobile__close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div className="order__products__cart__title">Cart</div>
      <div className="order__products__cart__subtitle">Items</div>
      <div className="order__products__cart__item__scroll">
        {cartProducts.map((item) => (
          <div key={item.id} className="order__products__cart__item__one">
            <div className="order__products__cart__img__header">
              <Image src={item.img} alt="fast food" height={50} width={50} />
              <div className="order__products__cart__name">{item.name}</div>
            </div>
            <div className="order__price">
              <div className="order__price__col">$ {item.price}</div>
              <div className="order__price__col">
                <div className="order__price__col__num">
                  <div className="order__price__num__less">-</div>
                  <div className="order__price__num__count">{item.count}</div>
                  <div className="order__price__num__grater">+</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="order__price__subtotal">
        <div className="order__price__subtotal__title">Subtotal</div>
        <div className="order__price__subtotal__price">$ 43.80</div>
      </div>
      <div className="deliver__toggle__container__warper">
        <div class="deliver__toggle__container">
          <input
            defaultChecked
            type="radio"
            name="tab"
            id="tab1"
            className="tab tab__1"
          />
          <label className="tab_label" htmlFor="tab1">
            <div className="deliver__toggle__entry__title">Delivery</div>
            <div className="deliver__toggle__entry__time">40-60 min </div>
          </label>

          <input type="radio" name="tab" id="tab2" className="tab tab__2" />
          <label className="tab_label" htmlFor="tab2">
            <div className="deliver__toggle__entry__title">Collection</div>
            <div className="deliver__toggle__entry__time">15-30 min </div>
          </label>

          <div className="indicator"></div>
        </div>
      </div>

      <div className="order__checkout__button">Checkout</div>
    </motion.div>
  );
}
