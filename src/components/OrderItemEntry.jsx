import { Link } from "react-router-dom";

export default function OrderItemEntry({ item }) {
  return (
    <>
      <Link
        to="/dashboard/orderstatus"
        className="review__cart__list__des__row"
      >
        <div className="review__entry__col__product">
          <div className="review__entry__col__product__heading">Product</div>
          <div className="review__cart__list__row__entry__product">
            <div className="checkout__product__col__img">
              <img
                className="checkout__product__col__img__image"
                src={item}
                alt="honda now"
              />
            </div>
            <div className="shop__cart__entry__content">
              <div className="shop__cart__entry__content__title">
                <span> Part No:</span> 12210-PZ1-004
              </div>
              <div className="shop__cart__entry__content__detail">
                Seal A, Valve Stem (NOK)
              </div>
            </div>
          </div>
        </div>
        <div className="review__entry__col">
          <div className="review__entry__col__title">Unit Price</div>
          <div className="review__entry__col__content">$2,800</div>
        </div>
        <div className="review__entry__col">
          <div className="review__entry__col__title">Quantity</div>
          <div className="review__entry__col__content">30</div>
        </div>
        <div className="review__entry__col">
          <div className="review__entry__col__title">Total</div>
          <div className="review__entry__col__content">$2,800</div>
        </div>
        {/* <div className="review__entry__col">
          <div className="review__entry__col__title">Review</div>
          <button
            onClick={() => setIsOpenReview(true)}
            className="review__entry__col__content__review"
          >
            Write Review
          </button>
        </div> */}
      </Link>
    </>
  );
}
