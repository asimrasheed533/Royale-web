import React from "react";
import "@/style/dashboard.scss";
import "@/style/listing.scss";
import UserSideBar from "@/components/UserSideBar";
import DashboardUserHeader from "@/components/DashboardUserHeader";
export default function layout({ children }) {
  return (
    <div>
      <div className="dashboard">
        <UserSideBar />
        <div className="dashboard__main">
          <DashboardUserHeader />
          <div className="dashboard__main__content">
            <div className="dashboard__main__content__inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
