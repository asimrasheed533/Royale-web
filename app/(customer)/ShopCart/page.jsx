import "@/style/ShopCart.scss";
import burger from "@/public/burger.webp";
import ItemEntry from "@/components/ItemEntry";
import Link from "next/link";

export default function ShopCart() {
  return (
    <>
      <div className="shop__cart__main">
        <div className="shop__cart__header">Shopping Cart</div>
        <div className="shop__cart__main__warper">
          <div className="shop__cart__list__container">
            <div className="shop__cart__list__header__row">
              <div className="shop__cart__list__header__title__col">
                Product
              </div>
              <div className="shop__cart__list__header__sub__col__price">
                Unit Price
              </div>
              <div className="shop__cart__list__header__sub__col">Quantity</div>
              <div className="shop__cart__list__header__sub__col">Price</div>
            </div>

            {/* <div className="shop__cart__empty__cart">
              <div className="shop__cart__empty__cart__title">
                Your cart is empty
              </div>
              <div className="shop__cart__empty__cart__text">
                Looks like you haven't added any items to your cart yet.
              </div>
              <div className="shop__cart__empty__cart__btn">
                <Link href="/" className="shop__cart__empty__cart__btn__link">
                  Continue Shopping
                </Link>
              </div>
            </div> */}
            <ItemEntry item={burger} />
          </div>
          <div className="shop__cart__total__container">
            <div className="shop__cart__total__content">
              <div className="shop__cart__total__entry">
                <div className="shop__cart__total__title">Sub Total:</div>
                <div className="shop__cart__total__price">$800.00</div>
              </div>
              <div className="secure__checkout__btn__warper">
                <Link href="/CheckOut" className="secure__checkout__btn">
                  Secure Checkout
                </Link>
              </div>

              <div className="paypal__checkout__title">
                Shipping to: <span>Suffolf,VA</span>
              </div>
              <div className="paypal__checkout__line" />
              <div className="order__summary">Order Summary</div>
              <div className="order__summary__entry">
                <div className="order__summary__entry__title">Sab Total:</div>
                <div className="order__summary__entry__price">$800.00</div>
              </div>
              <div className="order__summary__entry">
                <div className="order__summary__entry__title">
                  Estimeted Shipping Handle:
                </div>
                <div className="order__summary__entry__price">--</div>
              </div>
              <div className="order__summary__entry">
                <div className="order__summary__entry__title">
                  Estimeted Text:
                </div>
                <div className="order__summary__entry__price">--</div>
              </div>
              <div className="order__summary__entry">
                <input
                  className="cupon__entry__input"
                  type="text"
                  placeholder="Enter Cupon Code"
                />
                <button className="cupon__entry__btn">Apply</button>
              </div>
              {/* <div className="cupon__tag">
                <div className="cupon__tag__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-tag"
                  >
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </div>
                <div className="cupon__tag__num">121212</div>
                <div className="cupon__tag__remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                </div>
              </div> */}

              <div className="paypal__checkout__line" />
              <div className="order__summary__entry">
                <div className="total__summary__entry__title">
                  Estimated Order Total:
                </div>
                <div className="total__summary__entry__price">$800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
