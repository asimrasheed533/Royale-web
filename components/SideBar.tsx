"use client";
import "@/style/myCart.scss";

import Link from "next/link";
import { Fragment, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dashboardEntries from "@/constant/dashboardEntries";

export default function SideBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>(""); // Track the active path

  const checkWidth = () => {
    if (window.innerWidth > 1050) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useLayoutEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  // // Update active path on route change
  // useLayoutEffect(() => {
  //   setActivePath(router.pathname);
  // }, [router.pathname]);

  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <div className="container__sidebar__content">
          <div className="container__sidebar__subentry__content">
            {dashboardEntries?.map((item, index) => (
              <Fragment key={index}>
                <Link
                  href={item.path}
                  className={`container__sidebar__subentry__sub ${
                    activePath === item.path ? "active" : ""
                  }`}
                  style={{ padding: "15px 10px" }}
                  onClick={() => {
                    if (window.innerWidth < 1050) onClick();
                    setActivePath(item.path);
                  }}
                >
                  {item.icon}
                  <div
                    style={{
                      marginLeft: "10px",
                    }}
                    className="container__sidebar__subentry__content__sub"
                  >
                    {item.name}
                  </div>
                </Link>
              </Fragment>
            ))}
            <button
              style={{ padding: "15px 10px", marginTop: "50px" }}
              onClick={() => {
                document.cookie =
                  "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                router.push("/");
                router.refresh();
              }}
              className="container__sidebar__subentry__sub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-out"
              >
                <path d="M15 3H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <div
                style={{
                  marginLeft: "10px",
                }}
                className="container__sidebar__subentry__content__sub"
              >
                Logout
              </div>
            </button>
          </div>
        </div>
      )}

      <div onClick={() => setIsOpen(!isOpen)} className="container__main__menu">
        {isOpen === true ? (
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
            className="feather feather-align-justify"
          >
            <line x1="21" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="3" y2="18"></line>
          </svg>
        ) : (
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
        )}
      </div>
    </>
  );
}
