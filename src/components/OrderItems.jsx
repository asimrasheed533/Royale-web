import { Link } from "react-router-dom";

export default function OrderItems() {
  return (
    <Link to="/orderstatus" className="recent__order__content__upper__row">
      <div className="recent__order__content__col">
        <div className="recent__order__content__col__title">Order Number</div>
        <div className="recent__order__content__col__text">#14448379531</div>
      </div>
      <div className="recent__order__content__col">
        <div className="recent__order__content__col__title">Order Date</div>
        <div className="recent__order__content__col__text">12/3/2024</div>
      </div>
      <div className="recent__order__content__col">
        <div className="recent__order__content__col__title">Order Stauts</div>
        <div className="recent__order__content__col__text__status">
          Delivered
        </div>
      </div>
      <div className="recent__order__content__col">
        <div className="recent__order__content__col__title">Total</div>
        <div
          className="recent__order__content__col__text"
          style={{
            fontWeight: "bold",
          }}
        >
          $1230.21
        </div>
      </div>
    </Link>
  );
}
