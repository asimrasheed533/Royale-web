import SideBar from "@/components/SideBar";
import React from "react";
import "@/style/listing.scss";
import DashboardHeader from "@/components/DashboardHeader";
export default function layout({ children }) {
  return (
    <div>
      <div className="dashboard">
        <SideBar />
        <div className="dashboard__main__content">
          <DashboardHeader />
          {children}
        </div>
      </div>
    </div>
  );
}
