"use client";

import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import "@/style/header.scss";
import Image from "next/image";
import menuLogo from "@/public/menuLogo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function checkNavOpen() {
    if (window.innerWidth <= 950) {
      setIsOpenMenu(false);
    } else {
      setIsOpenMenu(true);
    }
  }
  useEffect(() => {
    checkNavOpen();

    window.addEventListener("resize", checkNavOpen);
  }, []);
  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          if (window.innerWidth <= 950) {
            setIsOpenMenu(false);
          }
        }}
      >
        <div className="nav__bar__container">
          {isOpenMenu ? (
            <div className="nav__entry">
              <Link
                href="/"
                className={`nav__entry__item ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/order"
                className={`nav__entry__item ${
                  pathname === "/order" ? "active" : ""
                }`}
              >
                Order Now
              </Link>
              <Link
                href="/reviews"
                className={`nav__entry__item ${
                  pathname === "/reviews" ? "active" : ""
                }`}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className={`nav__entry__item ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
              <div className="menu__close__warper">
                <div className="menu__close__title">Menu</div>
                <div
                  onClick={() => setIsOpenMenu(false)}
                  className="menu__close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-x"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="header__container__menu__icon"
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 14 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="7" y2="0.5" stroke="#C4C4C4" />
              <line y1="3.5" x2="11" y2="3.5" stroke="#C4C4C4" />
              <line y1="6.5" x2="14" y2="6.5" stroke="#C4C4C4" />
            </svg>
          </button>

          <div className="nav__log">
            <Image className="nav__log__image" src={menuLogo} alt="logo" />
          </div>
          <div className="nav__register">
            <button
              onClick={() => router.push("/signIn")}
              className="nav__register__button"
            >
              Login
            </button>
            /<button className="nav__register__button">Register</button>
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}
