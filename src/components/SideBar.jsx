"use client";
import "@/style/myCart.scss";
import ClickAwayListener from "react-click-away-listener";
import Link from "next/link";
import { Fragment } from "react";
import dashboardEntries from "../../constant/dashboardEntries";

export default function SideBar({ onClick }) {
  return (
    <ClickAwayListener
      onClickAway={() => {
        if (window.innerWidth < 1050) onClick();
      }}
    >
      <div className="container__sidebar__content">
        <div className="container__sidebar__subentry__content">
          {dashboardEntries.map((item, index) => (
            <Fragment key={index}>
              {item.name === "line" ? (
                <div
                  style={{
                    borderBottom: "1px solid #e0e0e0",
                    margin: "10px 0",
                  }}
                />
              ) : (
                <Link
                  end
                  href={item.path}
                  className="container__sidebar__subentry__sub"
                  style={{ padding: "15px 10px" }}
                  onClick={() => {
                    if (window.innerWidth < 1050) onClick();
                  }}
                  key={index}
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
              )}
            </Fragment>
          ))}
          <Link
            style={{ padding: "15px 10px", marginTop: "50px" }}
            href="/"
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
          </Link>
        </div>
      </div>
    </ClickAwayListener>
  );
}
