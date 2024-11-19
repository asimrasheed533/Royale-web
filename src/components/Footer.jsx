import "@/style/Footer.scss";
import menuLogo from "@/public/menuLogo.png";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer__overlay">
      <div className="Footer__content">
        <div className="Footer__content__col">
          <div
            className="Footer__content__left__logo"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            <Image
              className="Footer__content__left__logo__img"
              src={menuLogo}
              alt="logo"
            />
          </div>
        </div>
        <div
          className="Footer__content__col"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1700"
        >
          <div className="Footer__content__mid__content">
            <div className="Footer__content__mid__content__left">
              <div className="Footer__content__mid__content__left__heading">
                Site Map
              </div>
              <div className="Footer__content__mid__content__left__links">
                <Link
                  href="#"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Home
                </Link>
                <Link
                  href="#"
                  onClick={() => {
                    document.getElementById("Services").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Services
                </Link>

                <Link
                  href="#"
                  onClick={() => {
                    document.getElementById("Quality").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Policy
                </Link>
              </div>
            </div>
            <div className="Footer__content__mid__content__left">
              <div className="Footer__content__mid__content__left__heading">
                Socials
              </div>
              <div className="Footer__content__mid__content__left__links">
                <Link href="#">FaceBook</Link>
                <Link href="#">Linked In</Link>
                <Link href="#">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Footer__content__col"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1900"
        >
          <div className="Footer__content__mid__content__left__heading">
            info@sakanemaar.sa
          </div>

          <div className="Footer__content__right__input__name">
            <a href="tel:+966555445545">+966555445545</a>
          </div>
          <div className="Footer__content__right__input__name">
            <a href="tel:+966505147999">+966505147999</a>
          </div>
          <div className="Footer__content__right__input__name">
            Riyadh, Al Sahafa District, 13315
          </div>

          <div className="Footer__content__right__all__links">
            <div className="Footer__content__right__all__links__link">
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M44.2422 22.1968C44.2422 33.4702 34.6601 42.6865 22.7422 42.6865C10.8243 42.6865 1.24219 33.4702 1.24219 22.1968C1.24219 10.9234 10.8243 1.70703 22.7422 1.70703C34.6601 1.70703 44.2422 10.9234 44.2422 22.1968Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M20.9412 28.7802L20.9208 22.766H18.2422V20.1885H20.9208V18.4701C20.9208 16.1511 22.4132 15.0334 24.5631 15.0334C25.5929 15.0334 26.478 15.1072 26.7359 15.1402V17.5638L25.2448 17.5644C24.0756 17.5644 23.8492 18.0991 23.8492 18.8836V20.1885H27.1708L26.2779 22.766H23.8492V28.7802H20.9412Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="Footer__content__right__all__links__link">
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M44.2422 22.1968C44.2422 33.4702 34.6601 42.6865 22.7422 42.6865C10.8243 42.6865 1.24219 33.4702 1.24219 22.1968C1.24219 10.9234 10.8243 1.70703 22.7422 1.70703C34.6601 1.70703 44.2422 10.9234 44.2422 22.1968Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.5081 17.2715C30.1932 17.4447 30.7328 17.9523 30.9167 18.5956C31.2581 19.7698 31.2421 22.2179 31.2421 22.2179C31.2421 22.2179 31.2397 24.6525 30.9087 25.8259C30.7224 26.4685 30.1804 26.9753 29.4961 27.1478C28.2442 27.4552 23.2357 27.4499 23.2357 27.4499C23.2357 27.4499 18.2409 27.4447 16.9762 27.1223C16.2902 26.9491 15.7506 26.4415 15.5668 25.7989C15.239 24.6367 15.2422 22.1894 15.2422 22.1894C15.2422 22.1894 15.2454 19.7541 15.5756 18.5799C15.761 17.9373 16.3158 17.4185 16.9874 17.2468C18.2401 16.9386 23.2477 16.9439 23.2477 16.9439C23.2477 16.9439 28.2562 16.9491 29.5081 17.2715ZM21.6505 19.9467L21.6465 24.4455L25.8131 22.1999L21.6505 19.9467Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="Footer__content__right__all__links__link">
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M44.2422 22.1968C44.2422 33.4702 34.6601 42.6865 22.7422 42.6865C10.8243 42.6865 1.24219 33.4702 1.24219 22.1968C1.24219 10.9234 10.8243 1.70703 22.7422 1.70703C34.6601 1.70703 44.2422 10.9234 44.2422 22.1968Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M26.1101 19.7536C26.5409 19.7536 26.8901 19.4201 26.8901 19.0086C26.8901 18.5972 26.5409 18.2637 26.1101 18.2637C25.6793 18.2637 25.3301 18.5972 25.3301 19.0086C25.3301 19.4201 25.6793 19.7536 26.1101 19.7536Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4922 22.1966C19.4922 23.9085 20.9498 25.3007 22.7422 25.3007C24.5346 25.3007 25.9922 23.9085 25.9922 22.1966C25.9922 20.4847 24.5346 19.0925 22.7422 19.0925C20.9498 19.0925 19.4922 20.4847 19.4922 22.1966ZM21.1172 22.1967C21.1172 21.3407 21.846 20.6446 22.7422 20.6446C23.6384 20.6446 24.3672 21.3407 24.3672 22.1967C24.3672 23.0526 23.6384 23.7487 22.7422 23.7487C21.846 23.7487 21.1172 23.0526 21.1172 22.1967Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4922 28.4048H25.9922C27.6627 28.4048 29.2422 26.8962 29.2422 25.3007V19.0926C29.2422 17.4971 27.6627 15.9885 25.9922 15.9885H19.4922C17.8217 15.9885 16.2422 17.4971 16.2422 19.0926V25.3007C16.2422 26.8962 17.8217 28.4048 19.4922 28.4048ZM17.8672 19.0926C17.8672 18.367 18.7325 17.5405 19.4922 17.5405H25.9922C26.7519 17.5405 27.6172 18.367 27.6172 19.0926V25.3007C27.6172 26.0263 26.7519 26.8528 25.9922 26.8528H19.4922C18.7179 26.8528 17.8672 26.0403 17.8672 25.3007V19.0926Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="Footer__content__right__all__links__link">
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.25"
                  d="M44.1172 22.1968C44.1172 33.3958 34.5965 42.5615 22.7422 42.5615C10.8878 42.5615 1.36719 33.3958 1.36719 22.1968C1.36719 10.9978 10.8878 1.83203 22.7422 1.83203C34.5965 1.83203 44.1172 10.9978 44.1172 22.1968Z"
                  stroke="white"
                  strokeWidth="2.25"
                />
                <path
                  d="M17.9297 19.212C18.8617 19.212 19.6172 18.4904 19.6172 17.6003C19.6172 16.7101 18.8617 15.9885 17.9297 15.9885C16.9977 15.9885 16.2422 16.7101 16.2422 17.6003C16.2422 18.4904 16.9977 19.212 17.9297 19.212Z"
                  fill="white"
                />
                <path
                  d="M19.3359 20.2864H16.5234C16.3682 20.2864 16.2422 20.4067 16.2422 20.555V28.6137C16.2422 28.7619 16.3682 28.8823 16.5234 28.8823H19.3359C19.4912 28.8823 19.6172 28.7619 19.6172 28.6137V20.555C19.6172 20.4067 19.4912 20.2864 19.3359 20.2864Z"
                  fill="white"
                />
                <path
                  d="M27.7155 19.9164C26.5134 19.5231 25.0099 19.8686 24.1082 20.488C24.0772 20.3725 23.967 20.2865 23.8359 20.2865H21.0234C20.8682 20.2865 20.7422 20.4069 20.7422 20.5552V28.6138C20.7422 28.7621 20.8682 28.8824 21.0234 28.8824H23.8359C23.9912 28.8824 24.1172 28.7621 24.1172 28.6138V22.8223C24.5717 22.4484 25.1572 22.3291 25.6365 22.5236C26.1011 22.7111 26.3672 23.1689 26.3672 23.7786V28.6138C26.3672 28.7621 26.4932 28.8824 26.6484 28.8824H29.4609C29.6162 28.8824 29.7422 28.7621 29.7422 28.6138V23.2376C29.7101 21.0301 28.6228 20.2129 27.7155 19.9164Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer__bottom">
        <div className="Footer__bottom__heading">
          © 2024 Royal Food CONTRACTING. All rights reserved.
        </div>
      </div>
    </div>
  );
}
