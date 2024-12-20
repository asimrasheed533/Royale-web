import React from "react";
import "@/style/menu.scss";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
export default function Menu() {
  return (
    <>
      <PageBanner title="Our Menu Restaurant" />
      <div className="deal__container">
        <DealCard />
        <DealCard />
      </div>
    </>
  );
}

function DealCard({}) {
  return (
    <div className="deal__card">
      <Image
        className="deal__card__img"
        width={400}
        height={100}
        src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1734660373/image_2119_owrjjp.png"
        alt="food"
      />

      <div className="deal__card__text">
        <div className="deal__card__text__row">
          <div className="deal__card__text__name">Brekkie BBQ Burger</div>
          <div className="deal__card__text__price">Rs: 15.22</div>
        </div>
        <div className="deal__card__des">
          Pulled Pork, Beer Braised Brisket, & Quarter Rack of Ribs served with
          your choice of side.
        </div>
        <div className="deal__card__button">
          <button className="deal__card__button__btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}
