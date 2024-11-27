import CounterItem from "@/components/CounterItem";

export default function ItemEntry({ item }) {
  return (
    <div className="shop__cart__list__des__row">
      <div className="shop__cart__list__row__entry__product">
        <div className="checkout__product__col__img">
          <img className="__product__col__img__image" src={item} alt="store" />
        </div>
        <div className="shop__cart__entry__content">
          <div className="shop__cart__entry__content__title">
            <span> Part No:</span> 12210-PZ1-004
          </div>
          <div className="shop__cart__entry__content__detail">
            Seal A, Valve Stem (NOK)
          </div>
          <div className="shop__cart__entry__item__remove">Remove</div>
        </div>
      </div>
      <div className="shop__cart__list__row__entry__des__price">$9000.00</div>
      <div className="shop__cart__list__row__entry__quantity">
        <CounterItem />
      </div>

      <div className="shop__cart__list__row__entry__des">$9000.00</div>

      <div className="shop__cart__list__row__entry__remove">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="8"
            cy="8"
            r="7.61905"
            stroke="currentColor"
            strokeWidth="0.761905"
          />
          <path
            d="M10 6L6 10M6 6L10 10"
            stroke="currentColor"
            strokeWidth="0.923077"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="shop__cart__list__row__entry__des__mobile">$9000</div>
    </div>
  );
}
