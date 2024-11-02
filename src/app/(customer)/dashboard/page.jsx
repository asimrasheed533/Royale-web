"use client";
import SideBar from "@/components/SideBar";
import { useLayoutEffect, useState } from "react";

export default function dashboard() {
  const [isOpen, setIsOpen] = useState(false);
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
  }, []);

  // if (Object.keys(user).length === 0) {
  //   return <Navigate to="/" replace={true} />;
  // }
  return (
    <div className="cart__container">
      {isOpen === false && <SideBar onClick={() => setIsOpen(!isOpen)} />}
      <div className="container__main">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="container__main__menu"
        >
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
        {/* <Outlet /> */}
        outlet
      </div>
    </div>
  );
}
