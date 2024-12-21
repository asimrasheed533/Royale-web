import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import React from "react";
import "@/style/cart.scss";
export default function page() {
  return (
    <>
      <PageBanner title="Cart" />

      <div className="cart__container">
        <div className="cart__table__container">
          <div className="cart__table__header">
            <div
              className="cart__table__header__item"
              style={{
                minWidth: "250px",
              }}
            >
              Products
            </div>
            <div className="cart__table__header__item">Price</div>
            <div className="cart__table__header__item">Quantity</div>
            <div className="cart__table__header__item">Total</div>
          </div>
          <div className="table__entry__warper">
            <TableEntry />
            <TableEntry />
            <TableEntry />
            <TableEntry />
          </div>
        </div>
        <div className="cart__price__warper">
          <div className="cart__price__warper__title">Order Summary</div>
          <div className="cart__price__warper__entry">
            <div className="cart__price__warper__entry__title">Subtotal</div>
            <div className="cart__price__warper__entry__value">$14.25</div>
          </div>
          <div className="cart__price__warper__entry">
            <div className="cart__price__warper__entry__title">Tax</div>
            <div className="cart__price__warper__entry__value">$14.25</div>
          </div>
          <div className="cart__price__warper__entry">
            <div className="cart__price__warper__entry__title">Total</div>
            <div className="cart__price__warper__entry__value">$14.25</div>
          </div>
          <button className="cart__price__warper__btn">Checkout</button>

          <div className="cart__price__warper__entry">
            <div className="cart__price__warper__entry__title">
              Cash on Delivery
            </div>
            <div className="cart__price__warper__entry__value">$14.25</div>
          </div>
        </div>
      </div>
    </>
  );
}

function TableEntry({}) {
  return (
    <div className="cart__tale__entry">
      <div
        className="cart__tale__entry__item"
        style={{
          minWidth: "250px",
          alignItems: "center",
          gap: ".6em",
        }}
      >
        <Image
          className="cart__tale__entry__item__img"
          src="/banner_2.jpg"
          alt="food"
          width={70}
          height={70}
        />

        <div className="cart__tale__entry__item__name">Bacon Burger</div>
      </div>
      <div className="cart__tale__entry__item">$4.25</div>
      <div className="cart__tale__entry__item">
        <div className="cart__tale__entry__item__quantity">
          <button className="cart__tale__entry__item__quantity__btn">-</button>
          <div className="cart__tale__entry__item__quantity__value">1</div>
          <button className="cart__tale__entry__item__quantity__btn">+</button>
        </div>
      </div>
      <div className="cart__tale__entry__item">
        <div className="cart__tale__entry__item__total">$14.25</div>
      </div>
      <button className="cart__table__entry__item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
