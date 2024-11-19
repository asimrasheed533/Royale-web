import "@/style/trackOrder.scss";
import "@/style/SignIn.scss";
import banner_1 from "@/public/banner_1.jpg";
import Link from "next/link";
import Image from "next/image";
export default function TrackOrder() {
  return (
    <>
      <div className="create__container">
        <div className="create__container__img">
          <Image
            className="create__container__img__image"
            src={banner_1}
            alt="createAccount"
          />
        </div>
        <form className="create__container__from__warper">
          <div className="create__container__from__heading">Track Order</div>
          <div className="track__container__from__sub__heading">
            You may
            <Link className="track__container__from__text__link" href="/signin">
              LOGIN
            </Link>
            to view your entire order history with more complete details.
          </div>

          <div className="create__account__input">
            <div className="create__account__input_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AAAAAA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <input
              required
              className="create__account__input__entry"
              type="text"
            />

            <div className="error__input">Enter Order Number</div>

            <div className="create__account__input__label">
              Enter Order Number
            </div>
          </div>

          <div className="signin__submit__btn">
            <Link
              href="/dashboard/orderstatus"
              className="forgot__account__button"
            >
              Find My Order
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
