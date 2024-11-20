"use client";

import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import "@/style/header.scss";
import Image from "next/image";
import menuLogo from "@/public/menuLogo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header({ token }) {
  console.log(token);
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
              {token && (
                <>
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
                </>
              )}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-x"
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
          <button onClick={() => router.push("/")} className="nav__log">
            <Image className="nav__log__image" src={menuLogo} alt="logo" />
          </button>
          <div className="nav__register">
            {token ? (
              <>
                <button
                  onClick={() => router.push("/signIn")}
                  className="nav__register__button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </button>
                <button
                  onClick={() => router.push("/dashboard")}
                  className="nav__register__button"
                >
                  My Account
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => router.push("/signIn")}
                  className="nav__register__button"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </ClickAwayListener>
    </>
  );
}
