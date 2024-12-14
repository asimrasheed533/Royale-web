import React from "react";
import "@/style/listing.scss";
import "@/style/dashboard.scss";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import customerLinks from "@/data/customerLinks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard">
      <DashboardSidebar links={customerLinks} />
      <div className="dashboard__main">
        <DashboardHeader />
        <div className="dashboard__main__content">
          <div className="dashboard__main__content__inner">{children}</div>
        </div>
      </div>
    </div>
  );
}
