"use client";
import React from "react";
import "@/style/customerDashboard.scss";
import LogoutIcon from "@/icons/LogoutIcon";
export default function page() {
  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/");
  };
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
      <button onClick={handleLogout} className="log__out__button">
        <LogoutIcon />
        <div className="log__out__button__btn">Log out</div>
      </button>
    </div>
  );
}
