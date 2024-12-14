import React from "react";
import "@/style/dashboard.scss";
import "@/style/listing.scss";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
export default function layout({ children }) {
  return (
    <div>
      <div className="dashboard">
        <DashboardSidebar />
        <div className="dashboard__main">
          <DashboardHeader />
          <div className="dashboard__main__content">
            <div className="dashboard__main__content__inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
