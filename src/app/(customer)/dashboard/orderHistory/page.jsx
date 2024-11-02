"use client";
import "@/style/trackOrder.scss";
import OrderItemEntry from "@/components/OrderItemEntry";
import ReturnForm from "@/components/ReturnForm";
import item from "@/assets/item.webp";
import { useState } from "react";
import { createPortal } from "react-dom";
import ReactStars from "react-rating-stars-component";
export default function OrderHistoryAll() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [isOpenReview, setIsOpenReview] = useState(false);

  return (
    <>
      <div className="track__order__items__container__bg">
        <div className="track__order__items__container">
          <div className="review__order__content__upper">
            <div className="review__header__entry__row">
              <div className="review__header__entry__row__entry__product">
                Product
              </div>
              <div className="review__header__entry__row__entry">
                Unit Price
              </div>
              <div className="review__header__entry__row__entry">Quantity</div>
              <div className="review__header__entry__row__entry">Total</div>
            </div>
            <OrderItemEntry item={item} />
            <OrderItemEntry item={item} />
            <OrderItemEntry item={item} />
            <OrderItemEntry item={item} />
          </div>
        </div>
      </div>
      {createPortal(
        isOpen && (
          <div className="product__popup__container__bg">
            <div className="review__popup__container__warper">
              <div
                className="product__popup__close"
                style={{
                  zIndex: 100,
                  top: "10px",
                }}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="product__popup__close__icon"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.61719"
                      y="0.539062"
                      width="13.7427"
                      height="1.71783"
                      rx="0.858916"
                      transform="rotate(44.2199 1.61719 0.539062)"
                      fill="currentColor"
                    />
                    <rect
                      x="10.1133"
                      y="0.421875"
                      width="1.71783"
                      height="13.7427"
                      rx="0.858916"
                      transform="rotate(44.2199 10.1133 0.421875)"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="Review__popup__header">Write Review</div>
              <div className="Review__popup__subheader">
                Please write review this product or give feedback!
              </div>

              <div className="rate__review__container">
                <div className="rate__review__heading">Rate the products</div>
                <div className="rate__review__start">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={34}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="part__info__input__entry">
                  <div className="part__info__input__entry__label">Message</div>
                  <textarea
                    className="review__info__input__entry__textarea"
                    placeholder="Type here"
                  />
                  <div className="part__info__input__entry__error">
                    Enter the Message
                  </div>
                </div>
              </div>
              <div className="review__btn__container">
                <button className="review__btn__cancel">Cancel</button>
                <button className="review__btn__submit">Submit</button>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
      {createPortal(
        isOpenReview && (
          <div className="product__popup__container__bg">
            <div className="review__popup__container__warper">
              <div className="product__popup__close">
                <button
                  onClick={() => setIsOpenReview(false)}
                  className="product__popup__close__icon"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.61719"
                      y="0.539062"
                      width="13.7427"
                      height="1.71783"
                      rx="0.858916"
                      transform="rotate(44.2199 1.61719 0.539062)"
                      fill="currentColor"
                    />
                    <rect
                      x="10.1133"
                      y="0.421875"
                      width="1.71783"
                      height="13.7427"
                      rx="0.858916"
                      transform="rotate(44.2199 10.1133 0.421875)"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className="Review__popup__header">Write Review</div>
              <div className="Review__popup__subheader">
                Please write review this product or give feedback!
              </div>

              <div className="rate__review__container">
                <div className="rate__review__heading">Rate the product</div>
                <div className="rate__review__start">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={34}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>

                <div className="part__info__input__entry">
                  <div className="part__info__input__entry__label">Message</div>
                  <textarea
                    className="review__info__input__entry__textarea"
                    placeholder="Type here"
                  />
                  <div className="part__info__input__entry__error">
                    Enter the Message
                  </div>
                </div>
              </div>
              <div className="review__btn__container">
                <button className="review__btn__cancel">Cancel</button>
                <button className="review__btn__submit">Submit</button>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
      {isReturn ? <ReturnForm setIsReturn={setIsReturn} /> : null}
    </>
  );
}
