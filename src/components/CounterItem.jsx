"use client";
import { useState } from "react";

export default function CounterItem() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="shop__cart__list__row__entry__quantity__container">
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          className="shop__cart__list__row__entry__quantity__count"
        >
          -
        </button>
        <div className="shop__cart__list__row__entry__quantity__num">
          {count}
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="shop__cart__list__row__entry__quantity__count"
        >
          +
        </button>
      </div>
    </>
  );
}
