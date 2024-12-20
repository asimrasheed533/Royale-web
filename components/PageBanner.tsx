import Image from "next/image";
import React from "react";

export default function PageBanner({ title }: { title: string }) {
  return (
    <>
      <div className="banner__page__container">
        <Image
          className="banner__page__container__overlay__img"
          width={1500}
          height={400}
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1734660373/image_2119_owrjjp.png"
          alt="food"
        />

        <div className="banner__page__container__text">{title}</div>
      </div>
    </>
  );
}
