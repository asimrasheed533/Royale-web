"use client";
import React from "react";
import "@/style/customerDashboard.scss";
import LogoutIcon from "@/icons/LogoutIcon";
import usePostAction from "@/hooks/usePostAction";
import { logout } from "@/action";

export default function page() {
  const { actionCallback, isPending } = usePostAction({ action: logout });
  return (
    <div className="dashboard__container">
      <div className="dashboard__logo">
        <img src="https://via.placeholder.com/150" alt="logo" />
      </div>
      <div className="dashboard__title">
        <h1>Welcome to the dashboard</h1>
      </div>
      <div className="dashboard__content">
        <p>Here you can see all the information about your account</p>
      </div>
      <button onClick={actionCallback} className="log__out__button">
        <LogoutIcon />
        <div className="log__out__button__btn">
          {isPending ? (
            <span className="log__out__button__btn__text">Loading...</span>
          ) : (
            <span
              className="log__out__button__btn__text"
              onClick={actionCallback}
            >
              Log out
            </span>
          )}
        </div>
      </button>
    </div>
  );
}
