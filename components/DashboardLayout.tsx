import React from "react";
import "@/style/listing.scss";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <div className="dashboard__main">
        <DashboardHeader />
        <div className="dashboard__main__content">
          <div className="dashboard__main__content__inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
